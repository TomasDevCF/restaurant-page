import type { APIRoute } from "astro";
import { Reservas, eq } from "astro:db";
import { asc, db } from "astro:db";

export const GET: APIRoute = async ({params, request}) => {
  const response = await db
  .select()
  .from(Reservas)
  .where(eq(Reservas.date, "2024-05-08"))
  .orderBy(asc(Reservas.hour));

  return new Response(JSON.stringify(response))
}