import { useState } from "react"

export default function ResponsiveMenu() {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="sm:hidden block">
      <button className="text-black" onClick={handleClick}>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className={`${open ? "block" : "hidden"} right-0 top-0 sm:hidden absolute -z-10 bg-white h-screen w-[240px] pt-20`}>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <a
              href="/"
              className="text-black rubik text-xl mx-5 hover:text-primary transition-colors"
            >Inicio</a
            >
            <a
              href="/menu"
              className="text-black rubik text-xl mx-5 hover:text-primary transition-colors"
            >Menu</a
            >
            <a
              href="/reservar"
              className="border-1 border border-black rounded-md text-black text-xl mx-5 hover:border-primary px-4 py-2 hover:text-primary rubik transition-colors duration-300"
            >
              Reservar mesa
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}