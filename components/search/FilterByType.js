import React, { useContext, useState } from 'react'

import FullTimeElem from '../../pages/FullTimeElem'
import { Context } from '../ContextProvider';

function FilterByType() {
    const [fullTime, setFullTime] = useState('Full Time')

    const {jobs, dispatch} = useContext(Context)
    
    // Filtering jobs by its type
    function handleFilterBType(e) {
        const filteredByType = jobs.filter(job => job.type === fullTime)
        dispatch({type: 'SEARCH_BY_TYPE', newJobWithType: filteredByType})
    }

    return (
        <div>
            <FullTimeElem value={fullTime} onChange={handleFilterBType}/>
        </div>
    )
}

export default FilterByType
