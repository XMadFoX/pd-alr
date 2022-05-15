import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Seo from "../../components/seo"

const Category = ({ category }) => {
  if (!category) return <div>Failed to fetch</div>
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  return (
    <>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.attributes.name}</h1>
          <Articles articles={category.attributes.articles.data} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
  }).catch((err) => console.log("Fail to fetch categories", err))

  return {
    paths:
      categoriesRes?.data?.map((category) => ({
        params: {
          slug: category.attributes.slug,
        },
      })) || [],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  }).catch((err) => console.log("Failed to fetch categories", err))

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 30,
  }
}

export default Category
