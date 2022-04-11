import React, { ReactNode } from 'react';
import {FaShoppingCart} from 'react-icons/fa'

const Cart = React.forwardRef(({ onClick, href}:any) => {
    return(
        <a href={href} onClick={onClick} >
            <button className='bg-slate-50 w-8 h-8 relative rounded-full shadow-lg shadow-black/40'>
                <FaShoppingCart className='ml-1.5'/>
            </button>
        </a>
    )
})
export default Cart;