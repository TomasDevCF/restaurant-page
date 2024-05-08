import type { APIRoute } from "astro";
import { Menu } from "astro:db";
import { db } from "astro:db";

export const POST: APIRoute = async ({request}) => {
  const data = await request.formData()
  const category = data.get("category") as string
  const name = data.get("food_name") as string
  const ingredients = data.get("ingredients") as string
  const price = parseInt(data.get("price") as string)

  await db.insert(Menu).values([
    {category_id: category, ingredientes: ingredients, name, price, id: crypto.randomUUID()}
  ])

  return new Response (
    JSON.stringify({
      message: "Datos insertados correctamente."
    }),
    { status: 200 }
  )
}