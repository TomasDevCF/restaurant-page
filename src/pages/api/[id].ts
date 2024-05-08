import type { APIRoute } from "astro";
import { db } from "astro:db";
import { Reservas, eq } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
  await db.delete(Reservas).where(eq(Reservas.id, ctx.params.id as string));
  return new Response(null, { status: 204 });
}