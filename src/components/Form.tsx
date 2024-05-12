import { useState, type FormEvent } from "react";
import RadioCard from "./RadioCard";

export default function Form() {

  const [message, setMessage] = useState<null | string>(null)
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const [now, _] = useState(getDate())

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    resetMessages()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string

    if (!(await validateEmail(email))) {
      setMessage(null)
      setErrorMessage("El email no es valido")
      return
    }

    fetch("/api/post", {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then(r => {
        if (r.message === "Datos insertados correctamente.") {
          setMessage(r.message)
        } else {
          setErrorMessage(r.message)
        }
      })
  }

  function getDate() {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    return date.toISOString().split("T")[0]
  }

  function resetMessages() {
    setMessage(null)
    setErrorMessage(null)
  }

  async function validateEmail(email: string) {
    try {
      const res = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=4a028959c2702ca9fe8a4b7bcd098d4014d2d356`)
      const data = await res.json()
      return data.data.status === "valid"
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className="w-full min-h-[600px] gap-8 flex flex-col relative z-40 items-center justify-center" onSubmit={handleSubmit}>
      <div className="w-full max-w-[700px] shadow-2xl bg-white md:rounded-md p-4">
        <h1 className="text-4xl pb-8 rubik">Reserva tu mesa</h1>

        <h2 className="pb-2 text-lg">Numero de personas</h2>
        <div className="sm:px-4 grid grid-cols-5 gap-x-2 sm:gap-x-4">
          <RadioCard title="1" />
          <RadioCard title="2" />
          <RadioCard title="3" />
          <RadioCard title="4" />
          <RadioCard title="5" />
        </div>
        <h2 className="pb-2 pt-6 text-lg">Email</h2>
        <input onChange={resetMessages} required type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
        <h2 className="text-lg pb-2 pt-6">Horario de reserva</h2>
        <select onChange={resetMessages} required name="hour" id="hour" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" aria-placeholder="Selecciona una opcion">
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:00">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
          <option value="21:00">21:00</option>
          <option value="21:30">21:30</option>
          <option value="22:00">22:00</option>
          <option value="22:30">22:30</option>
          <option value="23:00">23:00</option>
          <option value="23:30">23:30</option>
          <option value="24:00">24:00</option>
        </select>
        <h2 className="text-lg pb-2 pt-6">Fecha de reserva</h2>

        <input onChange={resetMessages} required type="date" min={now} name="day" id="day" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5" />

        <button type="submit" className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/80 font-medium rounded-lg px-5 py-2.5 text-center mt-6 text-md">Reservar ahora</button>
        {message && <p className="text-green-500 pt-2">{message}</p>}
        {errorMessage && <p className="text-red-500 pt-2">{errorMessage}</p>}
      </div>
    </form>
  )
}