import { useState } from "react";
import RadioCard from "./RadioCard";

export interface FormInfo {
  people: number
  hour: `${number}:${number}` | ""
  date: `${number}-${number}-${number}` | ""
}

export default function Form() {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    people: 0,
    hour: "",
    date: "",
  })

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  function handleChangeFormInfo(propiertyToChange: string, value: string | number) {
    setFormInfo({ ...formInfo, [propiertyToChange]: value });
  }

  return (
    <form className="w-full min-h-screen gap-8 flex flex-col relative z-40 items-center justify-center">
      <div className="min-w-[700px] shadow-2xl bg-white rounded-md p-4">
        <h1 className="text-4xl pb-8 rubik">Reserva tu mesa</h1>
        <h2 className="pb-2 text-lg">Numero de personas</h2>
        <div className="px-4 grid grid-cols-5 gap-x-4">
          <RadioCard title="1" formInfo={formInfo} setFormInfo={setFormInfo} />
          <RadioCard title="2" formInfo={formInfo} setFormInfo={setFormInfo} />
          <RadioCard title="3" formInfo={formInfo} setFormInfo={setFormInfo} />
          <RadioCard title="4" formInfo={formInfo} setFormInfo={setFormInfo} />
          <RadioCard title="+5" formInfo={formInfo} setFormInfo={setFormInfo} />
        </div>
        <h2 className="text-lg pb-2 pt-6">Horario de reserva</h2>
        <select id="hour" onChange={(e) => handleChangeFormInfo("hour", e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
          <option selected>Selecciona una opcion</option>
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

        <input type="date" min={new Date().toISOString().split('T')[0]} name="day" id="day" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5" />

        <button type="submit" className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/80 font-medium rounded-lg px-5 py-2.5 text-center mt-6 text-md">Reservar ahora</button>
      </div>
    </form>
  )
}