import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../components/ContextProvider'

const ParentStyle = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 1fr;
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
                <div>
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2C4.86 2 1.5 5.36 1.5 9.5C1.5 13.64 4.86 17 9 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 9 2ZM8.25 15.4475C5.2875 15.08 3 12.56 3 9.5C3 9.035 3.06 8.5925 3.1575 8.1575L6.75 11.75V12.5C6.75 13.325 7.425 14 8.25 14V15.4475ZM13.425 13.5425C13.23 12.935 12.675 12.5 12 12.5H11.25V10.25C11.25 9.8375 10.9125 9.5 10.5 9.5H6V8H7.5C7.9125 8 8.25 7.6625 8.25 7.25V5.75H9.75C10.575 5.75 11.25 5.075 11.25 4.25V3.9425C13.4475 4.835 15 6.9875 15 9.5C15 11.06 14.4 12.4775 13.425 13.5425Z" fill="#B9BDCF"></path></svg>
                    <span>{location}</span>
                </div>
                <div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{time} {time === 1 ? 'day' : 'days'} ago</span>
                </div>
            </div>
        </ParentStyle>
    )
}

export default JobElement
