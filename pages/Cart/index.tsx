import Head from "next/head"
import CartStock from "../../components/CartStock"
import Navbar from "../../components/Navbar"
import DeleteItemAlert from "../../components/DeleteItemAlert"
import { GlobalContext } from '../../context/context'
import { useContext } from 'react'
import BuyItem from "../../components/BuyItem"


export default function Cart(){

    const {alert, buyState} = useContext(GlobalContext)

    return(
       <>
       <Head>
           <title>Carrito</title>
       </Head>
        <Navbar/>
        <CartStock/>
        {
            alert ?
            <DeleteItemAlert/>
            :
            <span></span>
        }
        {
            buyState ?
            <BuyItem/>
            :
            <span></span>
        }
        <footer className="flex flex-col fixed bottom-0 w-full justify-center items-center bg-violet-600 h-32 mt-4">
        <div className='text-lg'>
          <h1>© Pedro Fernandez </h1>
        </div>
        <div className=' flex flex-col justify-center items-center mt-3'>
          <a href="https://nextjs.org/" target="_blank" rel='noopener noreferrer'>Nextjs</a>
          <a href="https://tailwindcss.com/" target="_blank" rel='noopener noreferrer'>Tailwind</a>
        </div>
      </footer>
       </>
    )
}