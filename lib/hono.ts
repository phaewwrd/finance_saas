// lib/hono.ts
import { hc } from 'hono/client'
import type { AppType } from '@/types/app'

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!)
