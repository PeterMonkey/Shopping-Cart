interface Props {
    img: string
    name: string
    description: string
    price: string
}

const Product = ({img, name, description, price}:Props) => (
    <div className="mx-2 mb-3 rounded-sm shadow-md hover:cursor-pointer">
        
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

export default Product