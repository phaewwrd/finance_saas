import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { HTTPException } from "hono/http-exception"

import { db } from "@/db/drizzel";
import { accounts, insertAccountSchema } from "@/db/schema";
import { use } from "react";

const app = new Hono();

app.get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c)
  if(!auth?.userId){
    throw new HTTPException(401, {
      res: c.json({ error: "unauthoried"}, 401)
    }) 
  }
  const data = await db
    .select({
      id: accounts.id,
      name: accounts.name,
    })
    .from(accounts)
    .where(eq(accounts.userId, auth.userId))

  return c.json({ data });
});

app.post("/",
  clerkMiddleware(),
  zValidator("json", insertAccountSchema.pick({
    name: true,
  })),
 async (c) => {
  const auth = getAuth(c)
  const values = c.req.valid("json")


  if(!auth?.userId){
    return 
  }

  const data = await db.insert(accounts).values({
    id: "test",
    userId: auth.userId,
    ...values,
  })

  return c.json({})
  }
)

export default app;
