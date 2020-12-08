import React from 'react'
import styled from 'styled-components'

// Style
import { LiStyle } from '../components/styles/style'

function CityElement({city, onChange}) {
    return (
        <LiStyle>
            <input type='checkbox' id={city.city_name} value={city.city_name} onChange={onChange} />
            <label htmlFor={city.city_name}>{city.city_name}</label>
        </LiStyle>
    )
}

export default CityElement
