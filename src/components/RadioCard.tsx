import type { FormInfo } from "./Form"

interface Props {
  title: string
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>
  formInfo: FormInfo
}

export default function RadioCard({ title, setFormInfo, formInfo }: Props) {

  function handleChange(e: any) {
    if (e.target.checked) {
      setFormInfo({ ...formInfo, people: parseInt(e.target.value) })
    }
  }

  return (

    <li className="w-full list-none">
      <input type="radio" onChange={e => console.log(e)} id={title} name="hosting" value={title} className="hidden peer" />
      <label htmlFor={title} className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 shadow-xl">
        <div className="block">
          <div className="w-full text-lg font-semibold text-center">{title}</div>
        </div>
      </label>
    </li>
  )
} 