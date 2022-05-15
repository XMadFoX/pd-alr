import React from "react"
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, homepage }) => {
  return (
    <div className="uk-section">
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-container uk-container-large">
        <h1>{homepage.attributes.hero.title}</h1>
        <Articles articles={articles} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
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

  if (!articlesRes || !categoriesRes || !homepageRes)
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
