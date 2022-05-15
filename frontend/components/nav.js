import React from "react"
import NLink from "next/link"

const Nav = ({ categories }) => {
  return (
    <nav className="bg-navbar p-3 h-16 grid items-center sticky top-0 shadow-lg z-50">
      <ul className="flex gap-4">
        <Link
          href="/"
          liClass="hidden md:block"
          className="font-semibold"
        >
          Автономный логистический робот
        </Link>
        <Link href="/" liClass="md:mx-auto">
          <img src="/logo.svg" alt="" />
        </Link>
        <Link href="/blog" liClass="ml-auto">
          Блог
        </Link>
        <Link href="/#team">
          Команда
        </Link>
      </ul>
    </nav>
  )
}

export default Nav

const Link = ({ href, children, liClass, className, ...props }) => {
  return (
    <li className={liClass + " my-auto"}>
      <NLink href={href}>
        <a {...props} className={`text-xl text-gray-800 hover:text-black border-transparent border-b-2 hover:border-black transition-colors duration-500 ${className}`}>{children}</a>
      </NLink>
    </li>
  )
}
