import {GlobalContext} from '../context/context'
import {useContext} from 'react'

const Success = () => {

    const {cancelBuy} = useContext(GlobalContext)

    return(
        <>
        <div className="mb-3">
            <img src="/success.png" alt="" />
        </div>
        <div className="mt-5 text-green-600 text-2xl font-bold">
            <h1>Compra Exitosa!</h1>
        </div>
        <button onClick={() => cancelBuy()} className="bg-violet-500 ml-2 text-white font-bold rounded-md mt-9 py-1 px-2 shadow-lg hover:bg-violet-300">
            Salir
        </button>
        </>
    )
}

export default Success