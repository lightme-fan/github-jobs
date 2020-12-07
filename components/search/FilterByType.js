import React, { useContext, useState } from 'react'
import FullTimeElem from '../../pages/FullTimeElem'
import { Context } from '../ContextProvider';

function FilterByType() {
    const [fullTime, setFullTime] = useState('Full Time')

    const {jobs, dispatch} = useContext(Context)
    console.log(jobs);
    
    function handleFilterBType(e) {
        console.log(e.target.value);
        
        const filteredByType = jobs.filter(job => job.type === fullTime)
        console.log(filteredByType);
        dispatch({type: 'SEARCH_BY_TYPE', newJobWithType: filteredByType})
    }

    return (
        <div>
            <h2>Type</h2>
            <FullTimeElem value={fullTime} onChange={handleFilterBType}/>
        </div>
    )
}

export default FilterByType
