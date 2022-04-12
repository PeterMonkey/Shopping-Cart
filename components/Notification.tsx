import {GlobalContext} from '../context/context'
import {useContext} from 'react'

const Notification = () => {

    const {item} = useContext(GlobalContext)
    let count = item.length
    
    return(
    <>
       {
       count > 0 ? 
       <div className="flex items-center justify-center absolute top-9 w-4 h-4 bg-red-600 rounded-full ml-3 z-50">
        <h2 className="text-white ">{count}</h2>
        </div>
        :
        <span></span>
       }
    </>
    )
}
export default Notification;