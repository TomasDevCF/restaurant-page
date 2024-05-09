import type { APIRoute } from "astro";
import { Categorias, Menu, db } from "astro:db";
import { eq } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
  await db.delete(Menu).where(eq(Menu.category_id, ctx.params.id as string));
  await db.delete(Categorias).where(eq(Categorias.id, ctx.params.id as string));
  return new Response(null, { status: 204 });
}