import React from "react"
import Section from "./Section"

export default function Automation() {
  return (
    <Section
      color="orange"
      className="flex flex-col justify-center px-4 py-12 md:pl-24"
    >
      <h2 className="font-bold text-4xl md:text-6xl">Роботизация труда</h2>
      <p className="max-w-xl mt-12 text-xl md:text-2xl">
        Автоматизация и роботизация складов активно развивается во всех странах.
        Разработаны технологии, которые позволили сделать работу роботов на
        складах эффективной. Идея заменить низкоквалифицированный труд сборщиков
        заказов участием роботов, что называется, носилась в воздухе и
        напрашивалась на реализацию давно, но воплощена была именно тогда, когда
        это стало технически возможно. Использование мобильных роботов на складе
        выгодно.
      </p>
    </Section>
  )
}
