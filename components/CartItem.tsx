import { ProductProps } from "../utils/interfaces"


const CartItem = ({img, name, description, price}:ProductProps) => {
    return(
        <>
            <div className=" flex flex-row w-96 h-60 mb-4 bg-slate-50 shadow-lg rounded-md">
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
                </div>
            </div>
        </>
    )
}

export default CartItem