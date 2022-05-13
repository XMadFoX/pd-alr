import Image from "next/image"
import React from "react"
import Section from "./Section"

export default function Partners() {
  return (
    <Section color="light" className="p-24 flex gap-12">
      <div className="w-1/2">
        <h2 className="font-bold text-6xl mb-12">Наши партнеры</h2>
        <p className="text-2xl">
          Робот разрабатывается в партнёрстве с компанией «Прикладная
          робототехника». Заказчиком является компания «ЭвоКарго». «ЭвоКарго»
          обратились к нам с идеей замены работы человека в каре-погрузчике на
          автоматизированную систему. То есть, наша разработка будет загружена в
          уже имеющуюся «машинку», которую вы можете видеть справа, таким
          образом это поможет обеспечить полное исключение человека из
          производственной цепочки.{" "}
        </p>
      </div>
      <div className="w-1/2">
        <Image src="/icons/evocargo.svg" alt="" width={422} height={96} />
        <Image src="/covers/image1.jpg" alt="" width={625} height={450} />
      </div>
    </Section>
  )
}
