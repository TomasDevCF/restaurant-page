import { useState } from "react"
import Accordion from "./Accordion"

export default function QuestionsSection() {
  const [accordionSelected, setAccordionSelected] = useState<string>("")

  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
      <Accordion accordionSelected={accordionSelected} content="Nos encontramos en Calle Raymundo Montenegro al 2764, en la provincia de Córdoba. Puedes encontrar nuestros horarios de atencion y mas informacion en nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Cual es la direccion de "Los Cabritos"?' />
      <Accordion accordionSelected={accordionSelected} content="Sí, recomendamos hacer una reserva para asegurar tu mesa, especialmente durante los fines de semana y festivos. Puedes reservar directamente a través de nuestra página web o hablandonos a nuestras redes sociales." setAccordionSelected={setAccordionSelected} title='¿Necesito hacer reserva para cenar en "Los Cabritos"?' />
      <Accordion accordionSelected={accordionSelected} content="Sí, en nuestro restaurante nos esforzamos por atender a todos nuestros clientes. Ofrecemos una variedad de opciones para personas con restricciones dietéticas, incluyendo platos vegetarianos, veganos y sin gluten." setAccordionSelected={setAccordionSelected} title='¿Ofrecen opciones para personas con restricciones alimentarias?' />
      <Accordion accordionSelected={accordionSelected} content="Contamos con un área de estacionamiento limitada disponible para nuestros clientes directamente frente al restaurante. Además, hay varias opciones de estacionamiento público cercanas. No dudes en contactarnos para más detalles." setAccordionSelected={setAccordionSelected} title='¿Tienen opciones de estacionamiento disponibles?' />
    </div>
  )
}