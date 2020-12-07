import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../ContextProvider'

const FormStyle = styled.form`
    background-image: url('https://bit.ly/33QVyLX');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    padding: 4rem;
    fieldset {
        border: none;
        border-radius: 10px;
        background: #ffffff;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;

        input {
            width: 100%;
            padding: 10px;
            border: none
        }

        button {
            padding: 15px 30px;
            border: none;
            background: #1E86FF;
            color: #ffff;
            border-radius: 4px;
        }
    }

`

function MainSearch() {
    const {jobs, dispatch} = useContext(Context)
    const [ searchJob, setSearchJob ] = useState('')
    const [ searchResult, setSearchResult] = useState([])

    function searchParticularJob(e) {
        e.preventDefault()
        const filteredJobs = jobs.filter(job => {
            const searchByTile = job.title.toLowerCase().includes(searchJob.toLowerCase())
            const searchByCompany = job.company.toLowerCase().includes(searchJob.toLowerCase())
            return searchByTile
        })

        dispatch({type: 'SEARCH_BY_TITLE_COMPANY_EXPERTISE', newJob: filteredJobs})
        setSearchJob('')
    }
    
    return (
        <FormStyle onSubmit={searchParticularJob}>
            <fieldset>
                <input 
                    type='text'
                    value={searchJob}
                    placeholder='Title, companie, expertise'
                    onChange={(e) => setSearchJob(e.target.value)}
                />
                <button>Search</button>
            </fieldset>
        </FormStyle>
    )
}

export default MainSearch
