import { MdOutlineClose } from "react-icons/md"
import { ProductProps } from "../utils/interfaces"
import { GlobalContext } from '../context/context'
import { useContext } from 'react'



const CartItem = ({img, name, description, price}:ProductProps) => {

    const {deleteItemCart} = useContext(GlobalContext)

    return(
        <>
            <div className=" flex flex-row relative w-96 h-60 mb-4 bg-slate-50 shadow-lg rounded-md">
                <div className="w-96 h-60 overflow-hidden rounded-md">
                    <img className="aspect-auto" src={img} alt="" />
                </div>
                <div className="m-2 mt-4 flex flex-col justify-center items-center">
                    <h2 className="font-bold mb-8">{name}</h2>
                    <p className="text-sm ml-2 mb-4 text-slate-400">
                        {description}
                    </p>
                    <h2 className="mb-4">
                        ${price}
                    </h2>
                    <button className="w-20 h-14 mb-6 rounded-lg bg-violet-500 shadow-lg shadow-violet-500/30 hover:bg-violet-300 text-white font-bold">
                        Comprar
                    </button>
                    <div onClick={() => deleteItemCart(true)} className="absolute top-3 right-2 pt-1 pl-1 w-6 h-6 cursor-pointer hover:bg-slate-200 rounded-md">
                    <MdOutlineClose/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem