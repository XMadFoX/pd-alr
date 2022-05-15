import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext, useEffect, useState } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Nav from "../components/nav"
import { useViewportScroll } from "framer-motion"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  const { scrollY } = useViewportScroll()
  const [windowSize, setWindowSize] = useState()

  const handleResize = () => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight })
  }

  useEffect(() => {
    if (!window) return
    setWindowSize({ w: window.innerWidth, h: window.innerHeight })

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider
        value={{ ...global?.attributes, windowSize, scrollY }}
      >
        <Nav {...pageProps} />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  }).catch((err) => console.log("Failed to fetch global settings", err))
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes?.data } }
}

export default MyApp
