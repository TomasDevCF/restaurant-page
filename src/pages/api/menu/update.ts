// Crea un HTTP de tipo PUT para actualizaar el menu el la base de datos de Astro DB

import type { APIRoute } from "astro";

export const PUT: APIRoute = async ({ request }) =>  {
  const formData = await request.formData()
  const id = formData.get("id")
  const 
}
