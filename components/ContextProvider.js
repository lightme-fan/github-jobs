import React, { createContext } from 'react'
import useAppReducer from './useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    const [jobs, dispatch] = useAppReducer()
    console.log(jobs);
    
    return (
        <Context.Provider value={{jobs, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
