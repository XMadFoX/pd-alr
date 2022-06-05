import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import "moment/locale/ru"

const Article = ({ article }) => {
  if (!article) return <div>Failed to fetch article</div>
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <>
      <Seo seo={seo} />
      {imageUrl && (
        <img
          className="max-h-96 bg-cover object-cover w-full"
          alt=""
          src={imageUrl}
        />
      )}
      <div className="max-w-6xl mx-auto py-4 relative p-2">
        <h1 className="text-3xl p-2 font-semibold">
          {article.attributes.title}
        </h1>
        <div className="">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <div className="absolute grid border-t-2 border-navbar p-2 px-4 w-auto mr-auto mt-4">
            <div>
              {article.attributes.author.data?.attributes?.picture && (
                <NextImage
                  image={article.attributes.author.data?.attributes?.picture}
                />
              )}
            </div>
            <div>
              <p>{article?.attributes?.author?.data?.attributes?.name}</p>
              <p>
                <Moment format="DD MMM YYYY" locale="ru">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] }).catch(
    (err) => console.log(err)
  )

  return {
    paths:
      articlesRes?.data?.map((article) => ({
        params: {
          slug: article.attributes.slug,
        },
      })) || [],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  }).catch((err) => console.log(err))
  if (!articlesRes) return { props: { article: null } }

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 30,
  }
}

export default Article
