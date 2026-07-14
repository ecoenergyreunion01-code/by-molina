// Meilisearch - installez avec : npm run meilisearch
// Cette fonction n'est appelée que si le package est installé

interface MeilisearchClient {
  index: (uid: string) => {
    addDocuments: (docs: Record<string, unknown>[]) => Promise<unknown>
    search: (query: string, opts?: { filter?: string; limit?: number }) => Promise<{ hits: Record<string, unknown>[] }>
  }
}

let searchClient: MeilisearchClient | null = null

export async function getSearchClient() {
  if (searchClient) return searchClient
  try {
    const { MeiliSearch } = await import('meilisearch')
    searchClient = new MeiliSearch({
      host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST || 'http://localhost:7700',
      apiKey: process.env.MEILISEARCH_API_KEY,
    }) as unknown as MeilisearchClient
    return searchClient
  } catch {
    console.warn('⚠️ Meilisearch non installé. Lancez : npm run meilisearch')
    return null
  }
}

export const INDEX_PRODUITS = 'produits'

export async function indexerProduit(produit: Record<string, unknown>) {
  const client = await getSearchClient()
  if (!client) return
  return client.index(INDEX_PRODUITS).addDocuments([produit])
}

export async function rechercherProduits(query: string, filtres?: Record<string, string[]>) {
  const client = await getSearchClient()
  if (!client) return { hits: [] }

  const filterParts: string[] = []
  if (filtres?.largeurMin) filterParts.push(`largeurCm >= ${filtres.largeurMin[0]}`)
  if (filtres?.largeurMax) filterParts.push(`largeurCm <= ${filtres.largeurMax[0]}`)
  if (filtres?.couleurs?.length) {
    const couleurs = filtres.couleurs.map((c) => `couleurs.hex = "${c}"`).join(' OR ')
    filterParts.push(`(${couleurs})`)
  }
  if (filtres?.prixMin) filterParts.push(`prixBase >= ${filtres.prixMin[0]}`)
  if (filtres?.prixMax) filterParts.push(`prixBase <= ${filtres.prixMax[0]}`)

  return client.index(INDEX_PRODUITS).search(query, {
    filter: filterParts.length > 0 ? filterParts.join(' AND ') : undefined,
    limit: 48,
  })
}
