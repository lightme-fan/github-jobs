import React from 'react'

function FullTimeElem({onChange, value}) {
    return (
        <div>
            <input type='checkbox' value={value} onChange={onChange}/>
            <label>Full Time</label>
        </div>
    )
}

export default FullTimeElem
