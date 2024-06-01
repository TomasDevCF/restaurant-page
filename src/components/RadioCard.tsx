
interface Props {
  title: string
}

export default function RadioCard({ title }: Props) {
  return (

    <li className="w-full list-none">
      <input type="radio" defaultChecked={title === "1"} id={title} name="people" value={title} className="hidden peer" />
      <label htmlFor={title} className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 shadow-xl">
        <div className="block">
          <div className="w-full text-sm sm:text-lg font-semibold text-center">{title == "5" ? "+4" : title}</div>
        </div>
      </label>
    </li>
  )
} 