

const CartItem = () => {
    return(
        <>
            <div className=" flex flex-row w-96 h-60 mb-4 bg-slate-50 shadow-lg rounded-md">
                <div className="w-96 h-60 overflow-hidden rounded-md">
                    <img className="aspect-auto" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
                </div>
                <div className="m-2 flex flex-col justify-center items-center">
                    <h2 className="font-bold mb-8">Zapatos</h2>
                    <p className="text-sm ml-2 mb-7 text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <h2 className="mb-8">
                        $90.00
                    </h2>
                    <button className="w-20 h-14 rounded-lg bg-violet-500 shadow-lg text-white font-bold">
                        Comprar
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItem