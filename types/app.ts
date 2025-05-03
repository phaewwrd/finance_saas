// types/app.ts
import type { Hono } from 'hono'

// สร้าง type จาก Hono โดยตรง (แนะนำถ้าไม่อยาก hard link กับ route.ts)
export type AppType = Hono;
