import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../components/ContextProvider'

const ParentStyle = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 30%;
    gap: 20px;
    div {
        margin-left: 10%;
    }
    margin-top: 2rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 1rem;
`
const ImageStyle = styled.img`
    width: 100%;
    align-self: center;
`

function JobElement({company_logo, title, company, location, created_at, type}) {
    return (
        <ParentStyle>
            <ImageStyle src={company_logo} alt={title}/>
            <div>
                <p>{company}</p>
                <p>{title}</p>
                <button>{type}</button>
            </div>
            <div>
                <p>{location}</p>
                <p>{created_at}</p>
            </div>
        </ParentStyle>
    )
}

export default JobElement
