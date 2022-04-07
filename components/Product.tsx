
const Product = () => (
    <div className="mx-2 rounded-sm shadow-md hover:cursor-pointer">
        
        <img className="aspect-auto" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
        
        <div className="m-2">
            <h2 className="font-bold">Zapatos</h2>
            <p className="text-sm text-slate-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <h2>
                $79.99
            </h2>
        </div>
    </div>
)

export default Product