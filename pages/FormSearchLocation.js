import React from 'react'
import styled from 'styled-components'

import globIcon from '../icons/globIcon.svg'

// Style 
import { LocationSearchStyle } from '../components/styles/style'

const H2style = styled.h2`
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
`

function FormSearchLocation({onChange, onSubmit}) {
    return (
        <LocationSearchStyle onSubmit={onSubmit}>
            <H2style>Location</H2style>
            <input 
                type='text'
                placeholder='City, state, zip code or Location'
                onChange={onChange}
            />
        </LocationSearchStyle>
    )
}

export default FormSearchLocation
