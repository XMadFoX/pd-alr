import Image from "next/image"
import React, { useContext } from "react"
import Section from "./Section"
import { motion, useTransform } from "framer-motion"
import { GlobalContext } from "../../pages/_app"

export default function Team() {
  const { windowSize: ws, scrollY } = useContext(GlobalContext)
  const y1 = useTransform(
    scrollY,
    [ws?.h * 0.5, ws?.h, ws?.h * 2],
    [200, 0, -300]
  )
  const y2 = useTransform(
    scrollY,
    [ws?.h * 0.6, ws?.h, ws?.h * 2],
    [600, 0, -100]
  )
  const y3 = useTransform(
    scrollY,
    [ws?.h * 0.7, ws?.h, ws?.h * 2],
    [800, 0, -800]
  )

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
            style={{ y: y2 }}
          />
          <Card
            className="mt-12 xl:mt-48 ml-auto xl:mr-12 w-auto"
            image="/icons/fluent_people-filled.svg"
            title="1-2"
            text="курс"
            style={{ y: y3 }}
          />
        </div>
        <motion.p
          style={{ y: y1 }}
          className="text-xl md:text-2xl xl:w-1/2 mt-2 md:mt-12"
        >
          Мы разрабатываем автономного логистического робота грузчика на базе
          полноуправляемого шасси. Если проще, то мы занимаемся разработкой
          робота-ассистента для складских помещений. Почему именно такой проект?
        </motion.p>
      </div>
    </Section>
  )
}

const Card = ({ title, text, image, className, ...props }) => {
  return (
    <motion.div
      className={`text-navbar text-6xl xl:text-9xl font-bold flex gap-4 ${className}`}
      {...props}
    >
      <Image src={image} width={128} height={128} alt="" />
      <p>
        {title}{" "}
        <span className="text-2xl xl:text-4xl font-semibold -ml-2 xl:-ml-6">
          {text}
        </span>
      </p>
    </motion.div>
  )
}
