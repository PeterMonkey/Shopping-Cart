import React from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {GlobalContext} from '../context/context'
import {useContext} from 'react'


const Modal = () => {

    const {stateModal,productCount, data} = useContext(GlobalContext)
    console.log(data)
    const {img, name, description, price} = data

    return (
        <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
        <div className="w-[500px] min-h-[100px] flex flex-row bg-white relative rounded-md shadow-xl">
            <div className="w-64 p-2">
                <img src={img} alt="" />
            </div >
                <div className="w-60 h-40 my-7 flex flex-col justify-center items-center">
                    <h1 className="font-bold mt-5">{name}</h1>
                    
                    <div className='text-sm text-slate-400 pt-6 ml-4'>
                        <p>
                            {description} 
                        </p>
                    </div>

                    <div className='pt-14'>
                        <h3>$ {price}</h3>
                    </div>

                    <div onClick={() => productCount(false)} className='mt-4 h-10 w-20 pl-[6px] bg-violet-500 hover:bg-violet-300 rounded-md shadow-lg shadow-violet-500/30'>
                        <button className='text-sm text-white font-bold'>
                            Add to Car
                        </button>
                    </div>
                </div>
                <div onClick={() => stateModal(false)} className="absolute mr-2 pl-[6px] pt-[5px] top-3 right-1 w-7 h-7 text-violet-700 hover:bg-[#f2f2f2] cursor-pointer">
                
                    <MdOutlineClose/>
                
                </div>
        </div>
    </div>
    )
}
export default Modal