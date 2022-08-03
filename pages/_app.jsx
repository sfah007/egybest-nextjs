import Layout from '../components/Layout'
import React, { useEffect, useRef } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import Loading from '../components/Loading'



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const load = useRef()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log(router.asPath)
      load.current.show()
    })
    router.events.on("routeChangeComplete", () => load.current.hide())
    router.events.on("routeChangeError", () => load.current.hide())

    return () => {
      ["routeChangeStart", "routeChangeComplete", "routeChangeError"].forEach((e) => {
        router.events.off(e)
      })
    }
  })


  return (
    <Layout>
      <Component {...pageProps} />
      <Loading ref={load} />
    </Layout>
  )
}

export default MyApp


