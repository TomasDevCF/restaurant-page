import { useEffect, useState } from "react"
import AdminFood from "./AdminFood"

interface Props {
  category_name: string
  category_id: string
}

export interface MenuInterface {
  id: string
  name: string
  price: number
  category_id: string
  ingredientes: string
}

export default function AdminMenuList({ category_name, category_id }: Props) {
  const [categoryMenu, setCategoryMenu] = useState<null | MenuInterface[]>(null)

  useEffect(() => {
    fetch(`/api/menu/${category_id}`)
      .then(res => res.json())
      .then(r => setCategoryMenu(r))
      .catch(err => console.error(err))
  }, [])

  function deleteCategory() {
    fetch(`/api/menu/delete-category/${category_id}`, { method: "DELETE" })
      .then(_ => window.location.reload())
      .catch(err => console.error(err))
  }

  return (
    <div className="flex flex-col w-full relative h-max">
      <div id={category_name} className="w-full h-full absolute -top-24 -z-10"></div>
      <div className="flex justify-between w-full">
        <h2 className="text-3xl font-normal rubik">{category_name}</h2>
        <button
          className="text-red-500 deleteButton"
          onClick={deleteCategory}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul className="w-full flex flex-col justify-between h-full gap-y-2">
        {categoryMenu &&
          categoryMenu.map((food) => <AdminFood food={food} setCategoryMenu={setCategoryMenu} key={food.id} />)
        }
      </ul>
    </div>
  )
}