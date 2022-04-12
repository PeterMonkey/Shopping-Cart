import { useState } from "react";
import { createContext } from "react";
import {ProductProps} from '../utils/interfaces'

interface props {
    children: JSX.Element | JSX.Element[]
}

//Context
export const GlobalContext = createContext({
    state: false,
    data: {img: '', name:'', description:'', price:''},
    item: [{img: '', name:'', description:'', price:''}],
    stateModal: (value:boolean) => {},
    dataModal: (data:ProductProps, value:boolean) => {},
    addProductCart: (value:boolean, data:ProductProps) => {}
});

//Provider
export const GlobalProvider = ({children}:props) => {

    //Modal
    const [state, setState] = useState(false)
    const [data, setData] = useState({img: '', name:'', description:'', price:''})

    const stateModal = (value:boolean) => (
        setState(value)
    )
    
    const dataModal = (data:ProductProps, value:boolean) => {
        setState(value)
        setData(data)
    }

    //Notification

    //const [count, setCount] = useState(0)

    const addProductCart = (value:boolean, data:ProductProps) => {
        return(
        setState(value),
        setItem([...item, data])
        )
    }

    //Cart
    const [item, setItem] = useState<ProductProps[]>([])

    return(
        <GlobalContext.Provider value={{
            state,
            data,
            addProductCart,
            stateModal,
            dataModal,
            item
        }}>
            {children}
        </GlobalContext.Provider>
    )
}