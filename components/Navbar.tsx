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
        <div className="mr-10">
            <Notification count={2}/>
            <Link href="/Cart" passHref>
                <Cart/>
            </Link>
        </div>
    </nav>
)

export default Navbar