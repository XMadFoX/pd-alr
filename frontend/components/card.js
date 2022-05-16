import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="hover:text-black transition-colors duration-500 relative bg-secondary rounded-3xl h-64">
        <div className="contrast-75 hover:contrast-100 transition-[filter] duration-500">
          <NextImage className="rounded-3xl" image={article.attributes.image} />
        </div>
        <div className="bg-navbar absolute bottom-0 p-4 rounded-xl max-w-[60%]">
          <p id="category" className="text-uppercase">
            {article.attributes.category.name}
          </p>
          <p id="title" className="text-xl">
            {article.attributes.title}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Card
