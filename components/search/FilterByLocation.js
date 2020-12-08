import React, { useContext, useState } from 'react'
import { Context } from '../ContextProvider'
import cities from '../../citiesData.json'
import CityElement from '../../pages/CityElement'
import FormSearchLocation from '../../pages/FormSearchLocation'

function FilterByLocation() {
    const {jobs, dispatch} = useContext(Context)
    const [location, setLocation] = useState('')

    function seachByLocation(e) {
        e.preventDefault()
        console.log(e.target.value);
        const job = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()))
        console.log(job);

        dispatch({type: 'SEARCH_BY_LOCATION', newJobByLocation: job})
        setLocation('')
    }

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
            <ul>
                {cities.map(city => 
                    <CityElement 
                        key={city.id} 
                        city={city} 
                        onChange={seachByCity}
                    />
                )}
            </ul>
        </div>
    )
}

export default FilterByLocation
