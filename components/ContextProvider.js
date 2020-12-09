import React, { createContext, useState } from 'react'
import useAppReducer from './useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    // importing useApp reducer
    const [state, dispatch] = useAppReducer()
    const {loading, jobs} = state

    return (
        <Context.Provider value={{loading, jobs, dispatch}}>
            {children}            
        </Context.Provider>
    )
}

export {ContextProvider, Context}
