import React, {useContext} from 'react'
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
                        <JobElement key={`${job.id}${job.title}`} {...job}/>
                    )
                })} 
        </div>
    )
}

export default Jobs
