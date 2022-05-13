import React from "react"

export default function Hero() {
  return (
    <>
      <img
        className="z-10 w-11/12"
        src="/covers/hero.jpg"
        layout="fixed"
        width="80%"
        height="80%"
        alt=""
      />
      <h1 className="absolute z-20 ml-[5%] bottom-[20vh] bg-navbar rounded-xl p-4 text-4xl font-bold max-w-xs">
        Автономный логистический робот
      </h1>
    </>
  )
}
