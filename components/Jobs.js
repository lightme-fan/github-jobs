import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'

import { Context } from './ContextProvider';
import JobElement from '../pages/JobElement'

function Jobs() {
    const {loading, jobs, dispatch} = useContext(Context)

    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(5)
    
    // const maxPage = Math.ceil(jobs.length / perPage)
    // console.log(maxPage);
    
    // const firstPage = (page - 1) * perPage;
    // console.log(firstPage);
    // const lastPage = firstPage + perPage;
    // console.log(lastPage);

    // const slicedJobs = jobs.slice(0, perPage)
    // console.log(slicedJobs);
    
    return (
        <div>
            {loading ? 
                <h2>Loading...</h2> :
                jobs.map(job => {
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
        </div>
    )
}

export default Jobs
