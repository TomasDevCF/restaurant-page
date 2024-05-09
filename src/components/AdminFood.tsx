import { useState } from "react";
import type { MenuInterface } from "./AdminMenuList";

interface Props {
  food: MenuInterface
  setCategoryMenu: React.Dispatch<React.SetStateAction<MenuInterface[] | null>>
}

export default function AdminFood({ food, setCategoryMenu }: Props) {

  const [isEditing, setIsEditing] = useState<boolean>(false)

  function deleteFood() {
    fetch(`/api/menu/food/${food}`)
      .then(_ => {
        setCategoryMenu(prev => {
          if (prev) {
            return prev.filter(food => food.id !== food.id)
          }
          return null
        })
      })
      .catch(err => console.error(err))
  }

  function editFood(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)

    fetch(`/api/menu/food/update/${food.id}`, { method: "PUT", body: formData })
      .then(res => res.json())
      .then(_ => window.location.reload())
      .catch(err => console.error(err))
  }

  return (
    <>
      {!isEditing ? <li className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-xl">{food.name}</p>
          {food.ingredientes != "" && (
            <p className="text-lg text-gray-600">({food.ingredientes})</p>
          )}
        </div>
        <div className="flex gap-x-2">
          <p className="text-xl font-medium">${food.price}</p>
          <button className="flex h-max" onClick={() => setIsEditing(!isEditing)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>

          <button
            className="text-red-500 flex h-max"
            onClick={deleteFood}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </li> :
        <form onSubmit={editFood} className="flex justify-between gap-x-2 w-full">
          <div className="flex flex-col w-3/4 gap-y-2">
            <input required type="text" name="food_name" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
            <input type="text" name="food_ingredients" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1" />
          </div>
          <div className="flex gap-x-2 w-1/4">
            <input type="text" name="food_price" className="border border-solid border-gray-300 rounded-md w-full px-2 py-1 h-max" />
            <button className="flex h-max" onClick={() => setIsEditing(!isEditing)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>

            <button type="submit" className="text-green-500 flex h-max">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>}
    </>
  )
}