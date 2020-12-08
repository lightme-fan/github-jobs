import React from 'react'

function FormSearchLocation({onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='City, state, zip code or Location'
                onChange={onChange}
            />
        </form>
    )
}

export default FormSearchLocation
