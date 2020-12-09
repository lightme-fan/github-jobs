import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Context } from './ContextProvider'

//  Style
import { 
    BackStyle, 
    DetailTitle, 
    MoreDetailStyle, 
    ApplicationStyle, 
    DescStyle 
} from './styles/style'

function Details() {
    const { jobs, loading, removeTags } = useContext(Context)
    const { id } = useParams()
    const newJobs = jobs.filter(job => job.id === id)

    return (
        <>
            {newJobs.map(job => {  
                const jobDate = new Date(job.created_at)
                const dateNow = new Date(Date.now())
                const differenceInDate = dateNow.getTime() - jobDate.getTime()
                const numberOfDay = Math.round(differenceInDate / (1000 * 3600 * 24))

                return (
                    <div key={job.id}>
                        <div>
                            <Link to='/'>
                                <BackStyle>←  Back to search</BackStyle>
                            </Link>
                            <h3>How to apply</h3>
                            <ApplicationStyle dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                        </div>

                        <div>
                            <DetailTitle>
                                <h2>{job.title}<br/> <span>{numberOfDay} {numberOfDay === 1 ? 'day' : 'days'} ago</span></h2>
                                <button>{job.type === 'Full Time' && 'Full Time'}</button>
                            </DetailTitle>
                            <MoreDetailStyle>
                                <img className='image' src={job.company_logo} alt={job.title}/>
                                <div>
                                    <h3>{job.company}</h3>
                                    <p>{job.location}</p>
                                </div>
                            </MoreDetailStyle>
                            <DescStyle id='desc' dangerouslySetInnerHTML={{__html: job.description}} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Details
