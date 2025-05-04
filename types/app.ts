// types/app.ts
import type { Hono } from 'hono'
import type { BlankEnv, BlankSchema } from 'hono/types'

// Define AppType with proper generic parameters
export type AppType = Hono<BlankEnv, BlankSchema, "/api">;
