import React, { useContext } from 'react'
import { Context } from './ContextProvider';
import Header from './Header'
import MainSearch from './search/MainSearch';

function App() {
    const {jobs, dispatch} = useContext(Context)
    // console.log(jobs);
    return (
        <article>
            <Header/>
            <MainSearch/>
        </article>
    )
}

export default App
