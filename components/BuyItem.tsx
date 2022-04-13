

const BuyItem = () => {
    return(
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
        <div className="w-[800px] min-h-[100px] flex flex-row bg-white relative rounded-md shadow-xl">
            <div className="w-96 p-2">
                <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
            </div>
            <div className="flex flex-col w-96 h-auto ml-4 justify-center items-center">
                <h1 className="text-3xl font-bold mb-32">Zapatos</h1>
                <div className="mt-20">
                    <p>Total a pagar: $ 98.00</p>
                </div>
                <div className="mt-2">
                    <p className="line-through">Saldo: $ 200.00</p>
                    <h1 className="text-green-700 font-bold">$ 102.00</h1>
                </div>
                <div className="flex justify-around my-5">
                    <button  className="bg-slate-200 mr-2 text-violet-500 font-bold rounded-md py-1 px-2 shadow-lg hover:bg-slate-100">
                        Cancelar
                    </button>
                    <button className="bg-violet-500 ml-2 text-white font-bold rounded-md py-1 px-2 shadow-lg hover:bg-violet-300">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BuyItem