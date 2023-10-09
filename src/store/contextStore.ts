import React,{useContext} from 'react'
import {RootStore} from './rootStore'

export const StoreContext =React.createContext<RootStore | null>(null)


export const useStore =()=>{
    const context = useContext(StoreContext)
    if(context === null){
        throw new Error('')
    }
    return context
}