import Product from "./Product"
import db from '../utils/db.json'

const data = db.map((d) => d)
console.log(data)
const Stock = () => (
<div className="grid grid-cols-3 mx-28 mt-4">
    {data.map(({id, name, img, description, price}) => (
        <Product key={id} name={name} img={img} description={description} price={price}/>
    ))}
        
    </div>
)

export default Stock