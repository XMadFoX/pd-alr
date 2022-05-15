import React from "react"
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, homepage }) => {
  return (
    <div className="p-4 md:p-12 xl:p-24">
      <Seo seo={homepage.attributes.seo} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold text-center mb-20">
          {homepage.attributes.hero.title}
        </h1>
        <Articles articles={articles} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }).catch(() =>
      console.log("Failed to fetch articles")
    ),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }).catch(() => console.log("Failed to fetch homepage")),
  ])

  if (!articlesRes || !homepageRes)
    throw new Error(`Failed to fetch blog posts. `)

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 30,
  }
}

export default Home
