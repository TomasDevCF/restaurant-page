import { useEffect, useState } from "react";
import EditMenuDropdown from "./EditMenuDropdown";

export default function EditMenu() {

  const [categories, setCategories] = useState<null | any[]>(null);

  useEffect(() => {
    fetch("/api/menu/categories")
      .then(res => res.json())
      .then(r => setCategories(r))
      .catch(err => console.error(err))
  }, [])

  function createCategory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement)
    fetch("/api/menu/create/category", {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then(_ => window.location.reload())
      .catch(err => console.error(err))
  }

  function createFood(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement)
    fetch("/api/menu/create/food", {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then(_ => window.location.reload())
      .catch(err => console.error(err))
  }

  return (
    <div className="hidden md:grid grid-cols-2 gap-x-4 relative">
      {categories && <><EditMenuDropdown textButton="Crear nueva categoría" onSubmit={createCategory} className="bg-green-500" >
        <label htmlFor="category_name" className="text-start text-black">Ingrese el nombre de la categoría</label>
        <div className="flex gap-x-2 text-sm">
          <input required type="text" name="category_name" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
          <button type="submit" className="bg-primary px-2 py-1 text-white  rounded-md">Crear</button>
        </div>
      </EditMenuDropdown>
        <EditMenuDropdown onSubmit={createFood} textButton="Crear nueva comida" className="bg-blue-500" >
          <label htmlFor="category" className="text-start text-black text-sm">Categoria de la comida</label>
          <select className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" name="category" id="category_select">
            {categories.map(category => <option value={category.id}>{category.name}</option>)}
          </select>
          <label htmlFor="name" className="text-start text-black text-sm">Nombre de la comida</label>
          <input required type="text" name="food_name" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
          <label htmlFor="category" className="text-start text-black text-sm">Ingredientes para la comida (separados por coma)</label>
          <input required type="text" name="ingredients" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
          <label htmlFor="category" className="text-start text-black text-sm">Precio de la comida</label>
          <input required type="number" name="price" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
          <button type="submit" className="px-2 py-1 w-full bg-primary text-white rounded-md">Agregar comida</button>
        </EditMenuDropdown>
      </>}
    </div>
  )
}