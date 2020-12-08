import React from 'react'

import { FullTimeStyle } from '../components/styles/style'

function FullTimeElem({onChange, value}) {
    return (
        <FullTimeStyle>
            <input type='checkbox' value={value} onChange={onChange}/>
            <label>Full Time</label>
        </FullTimeStyle>
    )
}

export default FullTimeElem
