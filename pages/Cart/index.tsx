import Head from "next/head"
import CartStock from "../../components/CartStock"
import Navbar from "../../components/Navbar"
import DeleteItemAlert from "../../components/DeleteItemAlert"

export default function Cart(){
    return(
       <>
       <Head>
           <title>Carrito</title>
       </Head>
        <Navbar/>
        <CartStock/>
        <DeleteItemAlert/>
       </>
    )
}