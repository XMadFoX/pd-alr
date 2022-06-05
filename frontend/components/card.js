import React from "react"
import Link from "next/link"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="hover:text-black transition-colors duration-500 relative bg-secondary rounded-3xl h-64">
        {article?.attributes?.image && (
          <div className="contrast-75 hover:contrast-100 transition-[filter] duration-500 h-full">
            <picture className="object-fill h-full">
              <img
                className="rounded-3xl object-fill"
                alt=""
                src={article.attributes.image}
              />
              <img
                className="rounded-3xl object-fill h-full"
                alt=""
                // layout="responsive"
                src="https://s8.gifyu.com/images/KRUCENIE.gif"
              />
            </picture>
          </div>
        )}
        {/* {JSON.stringify(article.attributes.image)} */}
        <div className="bg-navbar absolute bottom-0 p-4 rounded-xl max-w-[60%] opacity-90 hover:opacity-100 transition-opacity duration-500">
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
