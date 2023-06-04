import { createContext, useState, useEffect } from "react";
import Data from './Data'

export const DataContext = createContext()

export const DataProvider = (props) =>{
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        const produto = Data.items
        if(produto) {
            setProdutos(produto)
        } else {
            setProdutos([])
        }
    },[])

    const value = {
        produtos: [produtos]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}