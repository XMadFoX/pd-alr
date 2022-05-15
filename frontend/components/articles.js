import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {articles.map((article, index) => {
        return <Card key={article.attributes.slug || index} article={article} />
      })}
    </div>
  )
}

export default Articles
