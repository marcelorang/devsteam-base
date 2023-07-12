import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtile from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
export default function Home() {
  return (
    <>
      <Head>
        <title>Steamleza: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       <Navbar />
       <Container>
       <div>
       <Subtile>Promoções</Subtile>
       </div>
       
       <div>
       <Subtile>Outros Jogos</Subtile>
       </div>
       </Container>
      </div>
    </>
  )
}
