import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import { Context } from './ContextProvider';
import JobElement from '../pages/JobElement'

function Jobs() {
    const {loading, jobs, dispatch} = useContext(Context)
    
    return (
        <div>
            {loading ? 
                <h2>Loading...</h2> :
                jobs.map(job => {
                    return (
                        <Link to={`/${job.id}`} key={`${job.id}${job.title}`}>
                            <JobElement {...job}/>
                        </Link>
                    )
                })} 
        </div>
    )
}

export default Jobs
