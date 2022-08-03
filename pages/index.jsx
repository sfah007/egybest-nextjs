import Head from 'next/head'
import Slide from '../components/Slide'
import { getPage } from '../lib/api'

export default function Home({ data }) {
  return (
    <div className="w-full">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Egybest" />
      </Head>

      <div className='w-full flex flex-col gap-3'>
        {data.movies.map((e, i) => <Slide box={e} key={i} />)}
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  const pageData = await getPage()
  return {
    props: { data:pageData }, // will be passed to the page component as props
  }
}
