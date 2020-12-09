import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../ContextProvider'

// Svg
import {globIcon} from '../../icons/globIcon.svg'

//  Style
import { FormSearchStyle } from '../styles/style'

function MainSearch() {
    const {jobs, dispatch} = useContext(Context)
    const [ searchJob, setSearchJob ] = useState('')
    
    function searchParticularJob(e) {
        e.preventDefault()
        const filteredJobs = jobs.filter(job => {
            const searchByTile = job.title.toLowerCase().includes(searchJob.toLowerCase())
            const searchByCompany = job.company.toLowerCase().includes(searchJob.toLowerCase())
            return searchByTile || searchByCompany 
        })

        dispatch({type: 'MAIN_SEARCH', newJob: filteredJobs})
        setSearchJob('')
    }

    return (
        <FormSearchStyle onSubmit={searchParticularJob}>
            <fieldset>
                <input 
                    type='text'
                    value={searchJob}
                    placeholder={`${globIcon} Title, companie, expertise`}
                    onChange={(e) => setSearchJob(e.target.value)}
                />
                <button>Search</button>
            </fieldset>
        </FormSearchStyle>
    )
}

export default MainSearch
