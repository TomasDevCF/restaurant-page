import type { APIRoute } from "astro";
import { Reservas, eq, db } from "astro:db";

export const POST: APIRoute = async ({request}) => {
  const data = await request.formData()
  const people = parseInt(data.get("people") as string)
  const hour = data.get("hour") as string
  const date = data.get("day") as string
  const email = data.get("email") as string
  const reserves = await db.select().from(Reservas).where(eq(Reservas.email, email))

  if (!people || !hour ||!date) {
    return new Response (
      JSON.stringify({
        message: "el formData es invalido"
      }),
      { status: 404 }
    );
  }
  
  for (let i = 0; i < reserves.length; i++) {
    if (reserves[i].date === date) {
      return new Response(
        JSON.stringify({
          message: "Ya hay una reserva de ese día para ese mail."
        }),
        {status: 404}
      )
    }
  }

  await db.insert(Reservas).values([
    {date, email, hour, people, id: crypto.randomUUID()}
  ])

  return new Response (
    JSON.stringify({
      message: "Datos insertados correctamente."
    }),
    { status: 200 }
  )
}