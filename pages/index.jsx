import Head from 'next/head'
import Main from './Main'
import Personas from './Personas'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Centinel | Software</title>
        <meta name="description" content="Centinel Sofware" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Personas/>
    </div>
  )
}