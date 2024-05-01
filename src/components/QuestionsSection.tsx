import { useState } from "react"
import Accordion from "./Accordion"

export default function QuestionsSection() {
  const [accordionSelected, setAccordionSelected] = useState<string>("")

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <Accordion accordionSelected={accordionSelected} content="Nos encontramos en Calle Raymundo Montenegro al 2764, en la provincia de Córdoba. Puedes encontrar nuestros horarios de atencion y mas informacion en nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Cual es la direccion de "Los Cabritos"?' />
      <Accordion accordionSelected={accordionSelected} content="Nos encontramos en Calle Raymundo Montenegro al 2764, en la provincia de Córdoba. Puedes encontrar nuestros horarios de atencion y mas informacion en nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Cual es la direccion de "Los Cabritos"?' />
      <Accordion accordionSelected={accordionSelected} content="Nos encontramos en Calle Raymundo Montenegro al 2764, en la provincia de Córdoba. Puedes encontrar nuestros horarios de atencion y mas informacion en nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Cual es la direccion de "Los Cabritos"?' />
      <Accordion accordionSelected={accordionSelected} content="Nos encontramos en Calle Raymundo Montenegro al 2764, en la provincia de Córdoba. Puedes encontrar nuestros horarios de atencion y mas informacion en nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Cual es la direccion de "Los Cabritos"?' />
    </div>
  )
}