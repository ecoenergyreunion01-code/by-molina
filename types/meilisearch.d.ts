declare module 'meilisearch' {
  export class MeiliSearch {
    constructor(config: { host: string; apiKey?: string })
    index(uid: string): {
      addDocuments(documents: Record<string, unknown>[]): Promise<unknown>
      search(query: string, options?: { filter?: string; limit?: number }): Promise<{ hits: Record<string, unknown>[] }>
    }
  }
}
