import React from 'react'
import Header from './Header'
import useAppReducer from './useAppReducer'

function App() {
    const [jobs, dispatch] = useAppReducer()
    console.log(jobs);
    return (
        <article>
            <Header/>
        </article>
    )
}

export default App
