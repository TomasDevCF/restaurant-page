import { useEffect, useState } from "react"
import Reserva from "./Reserva"

export interface ReserveInterface {
  id: string;
  people: number;
  hour: string;
  date: string;
}

export default function ReservasSection() {
  const [reserves, setReserves] = useState<null | ReserveInterface[]>(null)

  useEffect(() => {
    fetch("/api/get")
      .then(res => res.json())
      .then(r => setReserves(r))
      .catch(err => console.error(err))
  }, [])

  return (
    <div
      className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 pt-2 h-full overflow-y-auto"
    >
      {reserves ? reserves.map(reserve => <Reserva setReserves={setReserves} reserva={reserve} key={reserve.id} />) :
        <div className="w-full top-0 right-0 absolute h-full grid place-items-center">
          <svg width="80px" height="80px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>
        </div>}
    </div>
  )
}