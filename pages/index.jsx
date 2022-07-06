import Head from 'next/head'
import Main from './Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Centinel | Software</title>
        <meta name="description" content="Centinel Sofware" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}