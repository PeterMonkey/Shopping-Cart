import React from 'react'
import {MdOutlineClose} from 'react-icons/md'


const Modal = ({setModal}:any) => (
    <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)]">
        <div className="w-[500px] min-h-[100px] flex flex-row bg-white relative rounded-md shadow-xl">
            <div className="w-64 p-2">
                <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
            </div >
                <div className="w-60 h-40 my-7 flex flex-col justify-center items-center">
                    <h1 className="font-bold mt-5">Zapatos</h1>
                    
                    <div className='text-sm text-slate-400 pt-6 ml-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        </p>
                    </div>

                    <div className='pt-14'>
                        <h3>$ 96.99</h3>
                    </div>

                    <div onClick={() => setModal(false)} className='mt-4 h-10 w-20 pl-[6px] bg-violet-500 hover:bg-violet-300 rounded-md shadow-lg shadow-violet-500/30'>
                        <button className='text-sm text-white font-bold'>
                            Add to Car
                        </button>
                    </div>
                </div>
                <div onClick={() => setModal(false)} className="absolute mr-2 pl-[6px] pt-[5px] top-3 right-1 w-7 h-7 text-violet-700 hover:bg-[#f2f2f2] cursor-pointer">
                
                    <MdOutlineClose/>
                
                </div>
        </div>
    </div>
)
export default Modal