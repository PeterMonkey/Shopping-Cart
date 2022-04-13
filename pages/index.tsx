import type { NextPage } from 'next'
import Head from 'next/head'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import Stock from '../components/Stock'
import { GlobalContext } from '../context/context'
import { useContext } from 'react'



const Home: NextPage = () => {

  const {state} = useContext(GlobalContext)

  console.log(state)
  return (
    <div>
      <Head>
        <title>Tienda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mbrishoppingcart.ico" />
      </Head>

      <main>
        <Navbar/>
        <Stock/>
        {
        state?
        <Modal/>
        :
        <span></span>
        }
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
