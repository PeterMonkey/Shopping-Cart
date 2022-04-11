import CartItem from "./CartItem";

const CartStock = () => {
    return(
        <div className="grid grid-cols-2 mx-28 mt-4">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    )
}

export default CartStock;