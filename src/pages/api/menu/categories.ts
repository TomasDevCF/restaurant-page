import { Categorias, db } from 'astro:db';
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({params, request}) => {
  const response = await db.select().from(Categorias)

  return new Response(JSON.stringify(response))
}