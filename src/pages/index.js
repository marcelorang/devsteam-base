import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtile from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/gameCard/gameCard'
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
        <div className={styles.session}>
          <Subtile>Promoções</Subtile>
            <div className={styles.salecontainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
            </div>
        </div>
       
       <div>
       <Subtile className={styles.session}>Outros Jogos</Subtile>
        <div className={styles.gamecontainer}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        </div>  
       </div>
       </Container>
      </div>
    </>
  )
}
