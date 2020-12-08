import React from 'react'
import styled from 'styled-components'

const ListStyle = styled.li`
    input {
        margin-right: 2rem;
    }
`

function CityElement({city, onChange}) {
    return (
        <ListStyle>
            <input type='checkbox' id={city.city_name} value={city.city_name} onChange={onChange} />
            <label htmlFor={city.city_name}>{city.city_name}</label>
        </ListStyle>
    )
}

export default CityElement
