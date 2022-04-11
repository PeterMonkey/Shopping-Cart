import {GlobalContext} from '../context/context'
import {useContext} from 'react'
import { ProductProps } from '../utils/interfaces'

const Product = ({img, name, description, price}:ProductProps) => {

    const { dataModal } = useContext(GlobalContext)

    const data = {
        img,
        name,
        description,
        price
    }

    

    return (
        <div onClick={() => dataModal(data, true)} className="mx-2 mb-3 overflow-visible bg-white rounded-sm shadow-md hover:cursor-pointer">
        
        <div className="h-4/5 shadow-sm">
            <img className="aspect-auto" src={img} alt={name} title={name} />
        </div>
        
        <div className="m-2">
            <h2 className="font-bold">{name}</h2>
            <p className="text-sm text-slate-400">
                {description} 
            </p>
            <h2>
                ${price}
            </h2>
        </div>
    </div>
    )
}

export default Product