import Image from "next/image"
import React from "react"
import Section from "./Section"

export default function Profit() {
  return (
    <Section
      color="light"
      className="flex items-center justify-center gap-4 max-w-6xl mx-auto"
    >
      <Image
        className="w-1/4"
        src="/icons/stonks.svg"
        alt=""
        width={396}
        height={396}
      />
      <div className="w-1/2 ml-12">
        <h2 className="font-bold text-6xl mb-12">Выгода</h2>
        <p className="text-gray-800 text-2xl">
          Эксплуатация в логистических центрах роботов-грузчиков вместо людей
          выгодна в перспективе. Да, такая модернизация склада — процесс
          дорогостоящий, но экономия, в долгосрочной перспективе, достигается за
          счет увеличения производительности и эффективности логистических
          цепочек и снижением рисков для сотрудников. Исходя из этого была
          выбрана тема проекта и начата работа над ним.
        </p>
      </div>
    </Section>
  )
}
