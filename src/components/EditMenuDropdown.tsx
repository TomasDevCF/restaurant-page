import { useState } from "react"

interface Props {
  textButton: string
  className: string
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function EditMenuDropdown({ className, children, onSubmit, textButton }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className="w-full relative">
      {isActive && <form onSubmit={onSubmit} className="absolute bottom-[110%] bg-white rounded-md p-2 border-gray-200 border border-solid w-full flex flex-col gap-y-2">
        {children}
      </form>}
      <button onClick={() => setIsActive(!isActive)} className={`${className} text-white text-xl w-full py-2 rounded-md`}>
        {textButton}
      </button>
    </div>
  )
}