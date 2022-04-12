import CartItem from "./CartItem";
import {GlobalContext} from '../context/context'
import {useContext} from 'react'

const CartStock = () => {

    const {item} = useContext(GlobalContext)
    let count = item.length
    return(
        <>
            {
                count == 0 ?
                <div className="flex flex-col mt-14 items-center justify-center font-bold text-slate-400 text-4xl">
                    <h1>El Carrito esta Vacio</h1>
                </div>
                :
                <div className="grid grid-cols-2 mx-28 mt-4">
                {item.map(({name, img, description, price}) => (
                    <CartItem key={name} img={img} name={name} description={description} price={price}/>
                ))}
                </div>
            }
        </>
    )
}

export default CartStock;