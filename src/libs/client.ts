import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'ox2jgqwu81',
  apiKey: process.env.API_KEY || '',
})