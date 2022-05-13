import React from "react"
import Automation from "../components/home/automation"
import Construction from "../components/home/construction"
import Hero from "../components/home/hero"
import Optimization from "../components/home/optimization"
import Partners from "../components/home/partners"
import Profit from "../components/home/profit"
import Team from "../components/home/team"

export default function Home() {
  return (
    <div>
      <section className="min-h-[calc(100vh-4rem)] w-full relative grid items-center">
        <Hero />
      </section>
      <Team />
      <Automation />
      <Profit />
      <Optimization />
      <Partners />
      <Construction />
    </div>
  )
}
