import React from "react"
import NLink from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="bg-navbar p-3 h-16 grid items-center">
        <ul className="flex gap-4">
          <Link href="/" className="text-xl text-black font-semibold">
            Автономный логистический робот
          </Link>
          <Link href="/blog" className="text-xl text-black" liClass="ml-auto">
            Блог
          </Link>
          <Link href="/#team" className="text-xl text-black">
            Команда
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

const Link = ({ href, children, liClass, ...props }) => {
  return (
    <li className={liClass}>
      <NLink href={href}>
        <a {...props}>{children}</a>
      </NLink>
    </li>
  )
}
