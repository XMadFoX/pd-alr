import React from "react"

export default function Section({ children, color, className }) {
  const bgColor =
    color === "light" ? "" : color === "dark" ? "bg-secondary" : "bg-navbar"
  const textColor =
    color === "light"
      ? ""
      : color === "dark"
      ? "text-gray-200"
      : "text-gray-800"
  return (
    <section className={`min-h-screen ${bgColor} ${textColor} ${className}`}>
      {children}
    </section>
  )
}
