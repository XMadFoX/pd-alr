import Image from "next/image"
import React from "react"
import Section from "./Section"

export default function Profit() {
  return (
    <Section
      color="light"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 max-w-6xl mx-auto px-4 py-12"
    >
      <span className="h-64 md:h-auto w-64 md:w-auto">
        <Image
          className=""
          src="/icons/stonks.svg"
          alt=""
          // layout="fill"
          width={396}
          height={396}
        />
      </span>
      <div className="md:w-1/2 md:ml-12">
        <h2 className="font-bold text-4xl md:text-6xl mb-12">Выгода</h2>
        <p className="text-gray-800 text-xl">
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
