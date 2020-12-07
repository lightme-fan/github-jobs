import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useAppReducer from './useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    const [state, dispatch] = useAppReducer()
    const {loading, jobs} = state
    console.log(loading);
    
    return (
        <Context.Provider value={{jobs, dispatch}}>
            {children}            
        </Context.Provider>
    )
}

export {ContextProvider, Context}
