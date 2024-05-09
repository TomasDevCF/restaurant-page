import type { APIRoute } from "astro";
import { Menu, eq } from "astro:db";
import { db } from "astro:db";

export const PUT: APIRoute = async ({ request, params }) =>  {
  const formData = await request.formData()
  const name = formData.get("food_name") as string
  const ingredients = formData.get("food_ingredients") as string
  const price = parseInt(formData.get("food_price") as string)
  await db.update(Menu).set({ingredientes: ingredients, name, price}).where(eq(Menu.id, params.id as string))
  return new Response(JSON.stringify({
    message: "El menu ha sido actualizado."
  }), {status: 200})
} 
