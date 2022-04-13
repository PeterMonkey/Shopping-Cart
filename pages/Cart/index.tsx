import Head from "next/head"
import CartStock from "../../components/CartStock"
import Navbar from "../../components/Navbar"
import DeleteItemAlert from "../../components/DeleteItemAlert"
import { GlobalContext } from '../../context/context'
import { useContext } from 'react'
import BuyItem from "../../components/BuyItem"


export default function Cart(){

    const {alert} = useContext(GlobalContext)

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
        <BuyItem/>
       </>
    )
}