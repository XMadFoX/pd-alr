import React from "react"
import NLink from "next/link"

const Nav = ({ categories }) => {
  return (
    <nav className="bg-navbar p-3 h-16 grid items-center sticky top-0 shadow-lg z-50">
      <ul className="flex gap-4">
        <Link
          href="/"
          liClass="hidden md:block"
          className="text-xl text-black font-semibold"
        >
          Автономный логистический робот
        </Link>
        <Link href="/" liClass="md:mx-auto">
          <img src="/logo.svg" alt="" />
        </Link>
        <Link href="/blog" className="text-xl text-black" liClass="ml-auto">
          Блог
        </Link>
        <Link href="/#team" className="text-xl text-black">
          Команда
        </Link>
      </ul>
    </nav>
  )
}

export default Nav

const Link = ({ href, children, liClass, ...props }) => {
  return (
    <li className={liClass + " my-auto"}>
      <NLink href={href}>
        <a {...props}>{children}</a>
      </NLink>
    </li>
  )
}
