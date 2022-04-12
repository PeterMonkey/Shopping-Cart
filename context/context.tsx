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
    alert: false,
    itemToDelete: '',
    deleteItemCart: (name:string) => {},
    stateModal: (value:boolean) => {},
    dataModal: (data:ProductProps, value:boolean) => {},
    addProductCart: (value:boolean, data:ProductProps) => {},
    deleteAction: (name:string) => {},
    cancelDelete: () => {}
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

    //Delete Alert
    const [alert, setAlert] = useState(false)
    const [itemToDelete, setItemToDelete] = useState('')

    const deleteItemCart = (name:string) => {
        return(
            setItemToDelete(name),
            setAlert(true)
        )
    }

    const cancelDelete = () => {
        setAlert(false)
    }

    const deleteAction = (name:string) => {
        const newItem = item.filter(i => i.name !== name)
        setItem(newItem)
        setAlert(false)
    }

    return(
        <GlobalContext.Provider value={{
            state,
            data,
            alert,
            itemToDelete,
            item,
            deleteItemCart,
            addProductCart,
            stateModal,
            dataModal,
            deleteAction,
            cancelDelete
        }}>
            {children}
        </GlobalContext.Provider>
    )
}