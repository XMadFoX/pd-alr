import Image from "next/image"
import React from "react"
import Section from "./Section"

export default function Team() {
  return (
    <Section color="dark" className="px-3 py-12 xl:p-24">
      <div
        className="flex flex-col gap-4 xl:gap-20 xl:flex-row items-center justify-center w-11/12 mx-auto"
        id="team"
      >
        <div className="xl:w-1/2 flex flex-col">
          <h2 className="text-5xl font-bold text-white">Наша команда</h2>
          <Card
            className="mt-12 md:mt-24"
            image="/icons/fluent_hat-graduation-filled.svg"
            title="7"
            text="человек"
          />
          <Card
            className="mt-12 xl:mt-48 ml-auto xl:mr-12 w-auto"
            image="/icons/fluent_people-filled.svg"
            title="1-2"
            text="курс"
          />
        </div>
        <p className="text-xl md:text-2xl xl:w-1/2 mt-2 md:mt-12">
          Мы разрабатываем автономного логистического робота грузчика на базе
          полноуправляемого шасси. Если проще, то мы занимаемся разработкой
          робота-ассистента для складских помещений. Почему именно такой проект?
        </p>
      </div>
    </Section>
  )
}

const Card = ({ title, text, image, className }) => {
  return (
    <div
      className={`text-navbar text-6xl xl:text-9xl font-bold flex gap-4 ${className}`}
    >
      <Image src={image} width={128} height={128} alt="" />
      <p>
        {title}{" "}
        <span className="text-2xl xl:text-4xl font-semibold -ml-2 xl:-ml-6">
          {text}
        </span>
      </p>
    </div>
  )
}
