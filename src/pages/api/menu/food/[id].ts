import type { APIRoute } from "astro";
import { eq, Menu, db } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
  await db.delete(Menu).where(eq(Menu.id, ctx.params.id as string));
  return new Response(null, { status: 204 });
}