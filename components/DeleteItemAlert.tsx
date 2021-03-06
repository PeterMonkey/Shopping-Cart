import {GlobalContext} from '../context/context'
import {useContext} from 'react'

const DeleteItemAlert = () => {

    const {cancelDelete, deleteAction, itemToDelete, item} = useContext(GlobalContext)
    
    console.log(item)
    console.log(itemToDelete)
    return(
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
            <div className="w-96 min-h-[100px] flex flex-col bg-white relative rounded-md shadow-xl">
                <div className="text-xl font-bold text-violet-500 ml-14 my-4">
                    <h1>¿Desea Eliminar este Articlo?</h1>
                </div>
                <div className="flex justify-around my-5">
                    <button onClick={() => deleteAction(itemToDelete)} className="bg-slate-200 text-violet-500 font-bold rounded-md py-1 px-2 shadow-lg hover:bg-slate-100">
                        Aceptar
                    </button>
                    <button onClick={() => cancelDelete()} className="bg-violet-500 text-white font-bold rounded-md py-1 px-2 shadow-lg hover:bg-violet-300">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteItemAlert