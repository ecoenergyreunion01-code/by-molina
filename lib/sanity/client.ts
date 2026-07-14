import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xxxxxx'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const isConfigured = projectId !== 'xxxxxx' && /^[a-z0-9-]+$/.test(projectId)

export const client = isConfigured
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null

export async function fetchSanity<T = unknown>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!client) {
    console.warn('⚠️ Sanity non configuré. Ajoutez NEXT_PUBLIC_SANITY_PROJECT_ID dans .env.local')
    return null
  }
  return client.fetch<T>(query, params || {})
}
