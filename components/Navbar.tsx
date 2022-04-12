import  Link  from "next/link"
import Cart from "./Cart"
import Notification from "./Notification"

const Navbar = () => (
    <nav className="flex place-content-between bg-violet-500 mx-20 py-5 rounded-md mt-6">
        <Link href="/">
            <a>
                <h1 className="text-white ml-4 font-bold">My e-comerce</h1>
            </a>
        </Link>
        
        <div className="flex mr-10">
            <Notification/>
            <Link href="/Cart" passHref>
                <Cart/>
            </Link>
            <div className="text-white ml-4 bg-violet-600 pt-1 px-1 rounded-xl">
                <h2>$200.00</h2>
            </div>
        </div>
    </nav>
)

export default Navbar