import type { APIRoute } from "astro";
import { Categorias, Menu, db } from "astro:db";
import { eq } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
  await db.delete(Menu).where(eq(Menu.id, ctx.params.id as string));
  return new Response(null, { status: 204 });
}