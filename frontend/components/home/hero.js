import React from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"

export default function Hero() {
  const { scrollY, scrollYProgress } = useViewportScroll()

  const x1 = useTransform(scrollY, [0, 1000], [0, -1000])
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const o1 = useTransform(scrollY, [300, 900], [1, 0])
  const s2 = useTransform(scrollY, [300, 900], [1, 0.8])

  const y2 = useTransform(scrollY, [0, 1000], [0, -100])

  return (
    <>
      <motion.img
        className="z-10 w-11/12"
        src="/covers/hero.jpg"
        layout="fixed"
        width="80%"
        height="80%"
        alt=""
        initial="hidden"
        animate="visible"
        transition={{ type: "Inertia", velocity: 100 }}
        style={{ x: x1, y: y1, opacity: o1 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
            translateY: "-100%",
          },
          visible: {
            scale: 1,
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.5,
            },
          },
        }}
      />
      <motion.h1
        className="absolute z-20 ml-[5%] bottom-[20vh] bg-navbar rounded-xl p-4 text-4xl font-bold max-w-xs"
        initial="hidden"
        animate="visible"
        style={{ y: y2, scale: s2 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
            translateX: "-100%",
          },
          visible: {
            scale: 1,
            opacity: 1,
            translateX: 0,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        Автономный логистический робот
      </motion.h1>
    </>
  )
}
