import React, { useContext, useState } from 'react'
import { Context } from '../ContextProvider'

import cities from '../../citiesData.json'
import CityElement from '../../pages/CityElement'
import FormSearchLocation from '../../pages/FormSearchLocation'

// Style
import { UlStyle } from '../styles/style'

function FilterByLocation() {
    const {jobs, dispatch} = useContext(Context)
    const [location, setLocation] = useState('')

    // Filter by location
    function seachByLocation(e) {
        e.preventDefault()
        const job = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()))

        dispatch({type: 'SEARCH_BY_LOCATION', newJobByLocation: job})
        setLocation('')
    }

    // Filter by jobs by comparing its location and the cityData
    function seachByCity(e) {
        const job = jobs.filter(job => job.location.includes(e.target.value))
        console.log(job);

        dispatch({type: 'SEARCH_BY_CITIES', newJobByCities: job})
    }
    
    return (
        <div>
            <FormSearchLocation 
                onSubmit={seachByLocation} 
                onChange={(e) => setLocation(e.target.value)}
            />
            <UlStyle>
                {cities.map(city => 
                    <CityElement 
                        key={city.id} 
                        city={city} 
                        onChange={seachByCity}
                    />
                )}
            </UlStyle>
        </div>
    )
}

export default FilterByLocation
