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
    count: 0,
    stateModal: (value:boolean) => {},
    dataModal: (data:ProductProps, value:boolean) => {},
    productCount: (value:boolean) => {}
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

    const [count, setCount] = useState(0)

    const productCount = (value:boolean) => {
        return(
        setCount(count + 1),
        setState(value)
        )
    }

    return(
        <GlobalContext.Provider value={{
            state,
            data,
            count,
            productCount,
            stateModal,
            dataModal,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}