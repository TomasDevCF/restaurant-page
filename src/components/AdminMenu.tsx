import { useEffect, useState } from "react"
import AdminMenuList from "./AdminMenuList"

export default function AdminMenu() {
  const [categories, setCategories] = useState<null | any[]>(null)

  useEffect(() => {
    fetch("/api/menu/categories")
      .then(res => res.json())
      .then(r => setCategories(r))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full py-4 overflow-y-auto">
      {
        categories && categories.map((category) => (
          <AdminMenuList
            category_id={category.id}
            category_name={category.name}
            key={category.id}
          />
        ))
      }
    </div>
  )
} 