import Head from 'next/head'
import Slide from '../components/Slide'
import { scrapeHome } from '../lib/api'

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
  const { Worker } = require('worker_threads')

const runService = () => {

    return new Promise((resolve, reject) => {

        const worker = new Worker('./lib/workers/scrape-worker.js');

        worker.on('message', resolve);

        worker.on('error', reject);

        worker.on('exit', (code) => {

            if (code !== 0)

                reject(new Error(`stopped with  ${code} exit code`));

        })

    })

}



  const pageData = await runService()
  return {
    props: { data:pageData }, // will be passed to the page component as props
  }
}
