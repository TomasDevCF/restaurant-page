import type { APIRoute } from "astro";
import { Reservas, eq, sql, asc, db} from "astro:db";

export const GET: APIRoute = async () => {
  await db.run(sql`DELETE FROM Reservas WHERE date < ${new Date()}`)

  const response = await db
  .select()
  .from(Reservas)
  .where(eq(Reservas.date, "2024-05-08"))
  .orderBy(asc(Reservas.hour));

  return new Response(JSON.stringify(response))
}