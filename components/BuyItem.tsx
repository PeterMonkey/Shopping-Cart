import {GlobalContext} from '../context/context'
import {useContext, useState} from 'react'
import Success from './Success'

const BuyItem = () => {

    const [buy, setBuy] = useState(false)

    const {amount, cancelBuy, itemSelected, actionBuy} = useContext(GlobalContext)
    const {img, name, price} = itemSelected

    let change:number = amount - price

    let changeRound = change.toFixed()
    let amountRound = amount.toFixed(2)

    const buyItem = () => (
        actionBuy(name, price),
        setBuy(true)
    )

    return(
        <>
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
        <div className="w-[800px] min-h-[100px] flex flex-row bg-white relative rounded-md shadow-xl">
            <div className="w-96 p-2">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col w-96 h-auto ml-4 justify-center items-center">
                {
                    buy ?
                    <Success/>
                    :
                    <>
                        <h1 className="text-3xl font-bold mb-32">{name}</h1>
                {

                    change > 0 ?
                    <>
                    <div className="mt-20">
                    <p>Total a pagar: $ {price}</p>
                </div>
                <div className="mt-2">
                    <p className="line-through">Saldo: $ {amountRound}</p>
                    <h1 className="text-green-700 font-bold">$ {changeRound}</h1>
                </div>
                <div className="flex justify-around my-5">
                    <button onClick={() => cancelBuy()} className="bg-slate-200 mr-2 text-violet-500 font-bold rounded-md py-1 px-2 shadow-lg hover:bg-slate-100">
                        Cancelar
                    </button>
                    <button onClick={() => buyItem()} className="bg-violet-500 ml-2 text-white font-bold rounded-md py-1 px-2 shadow-lg hover:bg-violet-300">
                        Comprar
                    </button>
                </div>
                </>

                :
                     <div className="mt-20">
                    <p>Precio: $ 98.00</p>
                    <div className="mt-2">
                        <p>Fondos insuficientes</p>
                        <p className="text-red-700 font-bold"> $ {amountRound}</p>
                    </div>
                    <div className="font-bold mt-6">
                        <button onClick={() => cancelBuy()} className="bg-violet-500 ml-2 text-white font-bold rounded-md py-1 px-2 shadow-lg hover:bg-violet-300">
                            Salir
                        </button>
                    </div>
                </div> 
                }
                    </>
                }
                
                
            </div>
        </div>
    </div>
    </>
    )
}

export default BuyItem