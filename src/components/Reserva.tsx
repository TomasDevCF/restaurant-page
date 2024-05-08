import type { ReserveInterface } from "./ReservasSection";

interface Props {
  reserva: {
    id: string;
    people: number;
    hour: string;
    date: string;
  }
  setReserves: React.Dispatch<React.SetStateAction<ReserveInterface[] | null>>
}

export default function Reserva({ reserva, setReserves }: Props) {
  function formatDate() {
    const date = new Date(reserva.date);
    const day = (date.getDate() + 1).toString();
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
  }

  function deleteReserve() {
    fetch(`/api/${reserva.id}`, { method: "DELETE" })
      .then(res => {
        setReserves(prev => {
          return (prev as ReserveInterface[]).filter((r) => r.id !== reserva.id)
        })
      })
      .catch(err => console.error(err))
  }

  return (
    <div
      className="w-full rounded-md border border-solid border-gray-200 px-2 py-1 flex flex-col gap-y-2 h-max"
    >
      <div className="flex justify-between">
        <h2 className="font-medium">
          Mesa para {reserva.people == 5 ? "+4" : reserva.people} personas
        </h2>
        <button
          className="text-red-500 deleteButton"
          onClick={deleteReserve}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">{formatDate()}</p>
        <p className="font-medium">{reserva.hour}</p>
      </div>
    </div>
  )
}