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
    amount: 200.00,
    buyState: false,
    itemSelected: {img:'',name:'',price: 0},
    deleteItemCart: (name:string) => {},
    stateModal: (value:boolean) => {},
    dataModal: (data:ProductProps, value:boolean) => {},
    addProductCart: (value:boolean, data:ProductProps) => {},
    deleteAction: (name:string) => {},
    cancelDelete: () => {},
    buyToItem: (item:{}) => {},
    cancelBuy: () => {},
    actionBuy: (name:string, price:number) => {}
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
    //Buy item
    const [amount, setAmout] = useState(200.00)
    const [buyState, setBuyState] = useState(false)
    const [itemSelected, setItemSelected] = useState({img:'',name:'',price: 0})

    const buyToItem = (item:any) => {
        setBuyState(true)
        setItemSelected(item)
    }

    const cancelBuy = () => {
        setBuyState(false)
    }

    const actionBuy = (name:string, price:number) => {
        const newItem = item.filter(i => i.name !== name)
        setItem(newItem)
        setAmout(amount - price)
    }

    return(
        <GlobalContext.Provider value={{
            state,
            data,
            alert,
            itemToDelete,
            item,
            amount,
            buyState,
            itemSelected,
            deleteItemCart,
            addProductCart,
            stateModal,
            dataModal,
            deleteAction,
            cancelDelete,
            buyToItem,
            cancelBuy,
            actionBuy
        }}>
            {children}
        </GlobalContext.Provider>
    )
}