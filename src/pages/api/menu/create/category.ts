import type { APIRoute } from "astro";
import { Categorias } from "astro:db";
import { db } from "astro:db";

export const POST: APIRoute = async ({request}) => {
  const data = await request.formData()
  const category_name = data.get("category_name") as string

  await db.insert(Categorias).values([
    {name: category_name, id: crypto.randomUUID()}
  ])

  return new Response (
    JSON.stringify({
      message: "Datos insertados correctamente."
    }),
    { status: 200 }
  )
}