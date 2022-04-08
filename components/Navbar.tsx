import Cart from "./Cart"
import Notification from "./Notification"

const Navbar = () => (
    <nav className="flex place-content-between bg-violet-500 mx-20 py-5 rounded-md mt-6">
        <h1 className="text-white ml-4 font-bold">My e-comerce</h1>
        <div className="mr-10">
            <Notification count={2}/>
            <Cart/>
        </div>
    </nav>
)

export default Navbar