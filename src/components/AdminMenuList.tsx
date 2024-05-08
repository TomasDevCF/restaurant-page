import { useEffect, useState } from "react"

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
  }, [])

  return (
    <div className="flex flex-col w-full relative h-max">
      <div id={category_name} className="w-full h-full absolute -top-24"></div>
      <h2 className="text-3xl font-normal rubik">{category_name}</h2>
      <ul className="w-full flex flex-col justify-between h-full gap-y-2">
        {categoryMenu &&
          categoryMenu.map((menu) => (
            <li className="flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-xl">{menu.name}</p>
                {menu.ingredientes != "" && (
                  <p className="text-lg text-gray-600">({menu.ingredientes})</p>
                )}
              </div>
              <p className="text-xl font-medium">${menu.price}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}