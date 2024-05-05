import type { APIRoute } from "astro";
import { Reservas } from "astro:db";
import { db } from "astro:db";

export const POST: APIRoute = async ({request}) => {
  const data = await request.formData()
  const people = parseInt(data.get("people") as string)
  const hour = data.get("hour") as string
  const date = data.get("day") as string

  if (!people || !hour ||!date) {
    return new Response (
      JSON.stringify({
        message: "el formData es invalido"
      }), 
      { status: 400 }
    );
  }

  await db.insert(Reservas).values([
    {date, hour, people, id: crypto.randomUUID()}
  ])

  return new Response (
    JSON.stringify({
      message: "Datos insertados correctamente."
    }),
    { status: 200 }
  )
}