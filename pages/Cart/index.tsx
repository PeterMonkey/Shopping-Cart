import Head from "next/head"
import CartStock from "../../components/CartStock"
import Navbar from "../../components/Navbar"

export default function Cart(){
    return(
       <>
       <Head>
           <title>Carrito</title>
       </Head>
        <Navbar/>
        <CartStock/>
       </>
    )
}