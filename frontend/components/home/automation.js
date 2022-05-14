import React from "react"
import Section from "./Section"

export default function Automation() {
  return (
    <Section
      color="orange"
      className="flex flex-col md:flex-row justify-center px-4 py-12 md:pl-24 gap-8"
    >
      <div className="md:w-1/2">
        <h2 className="font-bold text-4xl md:text-6xl">Роботизация труда</h2>
        <p className="max-w-xl mt-12 text-xl md:text-2xl">
          Автоматизация и роботизация складов активно развивается во всех
          странах. Разработаны технологии, которые позволили сделать работу
          роботов на складах эффективной. Идея заменить низкоквалифицированный
          труд сборщиков заказов участием роботов, что называется, носилась в
          воздухе и напрашивалась на реализацию давно, но воплощена была именно
          тогда, когда это стало технически возможно. Использование мобильных
          роботов на складе выгодно.
        </p>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-24 pb-32 md:pb-auto">
        <p className="max-w-xs p-6 bg-secondary text-white rounded-full relative ml-auto mr-4">
          Я отнимаю работу у людей и мне не стыдно :)
          <img
            src="/bubblePart.svg"
            alt=""
            width={32}
            height={32}
            className="absolute mt-4 ml-6"
          />
          <img
            src="/logo.svg"
            alt=""
            height={256}
            width={256}
            className="absolute -ml-24 mt-12"
          />
        </p>
      </div>
    </Section>
  )
}
