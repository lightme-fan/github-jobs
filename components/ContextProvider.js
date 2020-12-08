import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useAppReducer from './useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    const [state, dispatch] = useAppReducer()
    const {loading, jobs} = state
    console.log(loading);

    // Removing tags inside of string
    function removeTags(str) { 
        if ((str===null) || (str==='')) 
            return false; 
        else
            str = str.toString(); 
              
        return str.replace( /(<([^>]+)>)/ig, ''); 
    }

    return (
        <Context.Provider value={{jobs, dispatch, removeTags}}>
            {children}            
        </Context.Provider>
    )
}

export {ContextProvider, Context}
