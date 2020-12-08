import React, { useContext, useState } from 'react'
import { Context } from '../ContextProvider'

//  Style
import { FormSearchStyle } from '../styles/style'

function MainSearch() {
    const {jobs, dispatch} = useContext(Context)
    const [ searchJob, setSearchJob ] = useState('')
    const [ searchResult, setSearchResult] = useState([])

    function searchParticularJob(e) {
        e.preventDefault()
        const filteredByTitle = jobs.filter(job => {
            const searchByTile = job.title.toLowerCase().includes(searchJob.toLowerCase())
            return searchByTile
        })

        dispatch({type: 'SEARCH_BY_TITLE', newJob: filteredByTitle})
        setSearchJob('')
    }
    
    return (
        <FormSearchStyle onSubmit={searchParticularJob}>
            <fieldset>
                <input 
                    type='text'
                    value={searchJob}
                    placeholder='Title, companie, expertise'
                    onChange={(e) => setSearchJob(e.target.value)}
                />
                <button>Search</button>
            </fieldset>
        </FormSearchStyle>
    )
}

export default MainSearch
