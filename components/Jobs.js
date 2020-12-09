import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

import { Context } from './ContextProvider';
import JobElement from '../pages/JobElement'

import {PaginationStyle} from './styles/style'

function Jobs() {
    const {loading, jobs, dispatch} = useContext(Context)

    // Pagination
    const [ activePage, setActivePage ] = useState( 1 );
    const [perPage, setPerPage] = useState(3)
    
   
   // Current Jobs
    const lastPage  = activePage * perPage;
    const firstPage = lastPage - perPage;
    const currentJobs = jobs.slice( firstPage, lastPage );
    console.log(currentJobs)

    // Handle page number
    function handlePageChange(pageNumber) {
        setActivePage(pageNumber)
    }

    return (
        <>
            <div>
                {loading ? 
                    <h2>Loading...</h2> :
                    currentJobs.map(job => {
                        const jobDate = new Date(job.created_at)
                        const dateNow = new Date(Date.now())
                        const differenceInDate = dateNow.getTime() - jobDate.getTime()
                        const numberOfDay = Math.round(differenceInDate / (1000 * 3600 * 24))

                        return (
                            <Link to={`/${job.id}`} key={`${job.id}${job.title}`}>
                                <JobElement time={numberOfDay} {...job} />
                            </Link>
                        )
                    })} 
                <PaginationStyle>
                    <Pagination
                        activePage={ activePage }
                        itemsCountPerPage={ 3 }
                        totalItemsCount={ jobs.length }
                        pageRangeDisplayed={ 3 }
                        onChange={ handlePageChange }
                    />
                </PaginationStyle>
            </div>
        </>
    )
}

export default Jobs
