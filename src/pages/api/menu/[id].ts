import { Menu, db, eq } from 'astro:db';
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({params}) => {
  const response = await db.select().from(Menu).where(eq(Menu.category_id, params.id as string))

  return new Response(JSON.stringify(response))
}