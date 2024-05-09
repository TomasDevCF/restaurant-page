import { ArrowDown, ArrowUp } from "../icons/Arrows";

interface Props {
  title: string
  content: string
  accordionSelected: string
  setAccordionSelected: React.Dispatch<React.SetStateAction<string>>
}


export default function Accordion({ content, accordionSelected, setAccordionSelected, title }: Props) {
  function toggleAccordion() {
    setAccordionSelected((prev) => (prev === title ? "" : title))
  }

  return (
    <div className="h-max w-full border border-1 border-gray-300 rounded-md p-2 bg-white">
      <div className="title flex justify-between cursor-pointer" onClick={toggleAccordion}>
        <h3 className="sm:text-lg text-md font-bold">{title}</h3>
        <button>
          {accordionSelected === title ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {accordionSelected === title && <p className="pt-2 text-sm md:text-md">{content}</p>}
    </div>
  )
}