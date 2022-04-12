
const DeleteItemAlert = () => {
    return(
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
            <div className="w-96 min-h-[100px] flex flex-col bg-white relative rounded-md shadow-xl">
                <div className="text-xl font-bold text-violet-500 ml-14 my-4">
                    <h1>¿Desea Eliminar este Articlo?</h1>
                </div>
                <div className="flex justify-around my-5">
                    <button className="bg-slate-200 text-violet-500 font-bold rounded-md py-1 px-2 shadow-lg">
                        Aceptar
                    </button>
                    <button className="bg-violet-500 text-white font-bold rounded-md py-1 px-2 shadow-lg">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteItemAlert