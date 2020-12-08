import React from 'react'

// Style 
import { LocationSearchStyle } from '../components/styles/style'
function FormSearchLocation({onChange, onSubmit}) {
    return (
        <LocationSearchStyle onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='City, state, zip code or Location'
                onChange={onChange}
            />
        </LocationSearchStyle>
    )
}

export default FormSearchLocation
