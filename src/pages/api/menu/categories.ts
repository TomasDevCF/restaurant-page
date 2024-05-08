import { Menu, db } from 'astro:db';
import type { APIRoute } from "astro";
import { Categorias } from 'astro:db';

export const GET: APIRoute = async ({params, request}) => {
  const response = await db.select().from(Categorias)

  return new Response(JSON.stringify(response))
}