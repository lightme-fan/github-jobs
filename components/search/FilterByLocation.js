import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import cities from '../../citiesData.json'
import CityElement from '../../pages/CityElement'

function FilterByLocation() {
    const {jobs, dispatch} = useContext(Context)
    function seachByLocation(e) {
        console.log(e.target.value);
        const job = jobs.filter(job => job.location.includes(e.target.value))
        console.log(job);

        dispatch({type: 'SEARCH_BY_LOCATION', newJobByLocation: job})
    }

    return (
        <div>
            <ul>
                {cities.map(city => 
                    <CityElement 
                        key={city.id} 
                        city={city} 
                        onChange={seachByLocation}
                    />
                )}
            </ul>
        </div>
    )
}

export default FilterByLocation
