import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../components/ContextProvider'

const ParentStyle = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 30%;
    gap: 20px;
    color: #334680;
    div {
        margin-left: 10%;
    }
    .company {
        font-size: 12px;
        line-height: 14px;
    }
    margin-top: 2rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 1rem;
    .about {
        align-items: end;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        font-size: 12px;
        line-height: 14px;
        color: #B9BDCF;
    }
`
const ImageStyle = styled.img`
    width: 100%;
`

function JobElement({company_logo, title, company, location, time, type}) {
    return (
        <ParentStyle>
            <ImageStyle src={company_logo} alt={title}/>
            <div>
                <p className='company'>{company}</p>
                <p className='title'>{title}</p>
                <button>{type}</button>
            </div>
            <div className='about'>
                <p>{location}</p>
                <p>{time} {time === 1 ? 'day' : 'days'} ago</p>
            </div>
        </ParentStyle>
    )
}

export default JobElement
