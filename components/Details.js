import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Context } from './ContextProvider'

//  Style
import { BackStyle } from './styles/style'

function Details() {
    const { jobs, loading, removeTags } = useContext(Context)
    const { id } = useParams()
    const newJobs = jobs.filter(job => job.id === id)

    return (
        <div>
            <h2>Details</h2>
            {newJobs.map(job => {
                
                return (
                    <div key={job.id}>
                        <div>
                            <Link to='/'>
                                <BackStyle>←  Go back</BackStyle>
                            </Link>
                            <h3>How to apply</h3>
                            <p>{removeTags(job.how_to_apply)}</p>
                        </div>

                        <div>
                            <div>
                                <h2>{job.title}</h2>
                                <button>{job.type}</button>
                                <span></span>
                            </div>
                            <div>
                                <img src={job.company_logo} alt={job.title}/>
                                <h3>{job.company}</h3>
                                <p>{job.location}</p>
                            </div>
                        </div>
                        <p>{job.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Details
