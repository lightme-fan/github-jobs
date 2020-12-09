import styled from 'styled-components';

export const ArticleStyle = styled.article`
    max-width: 1200px;
    margin: 0 auto;
    color: #334680;
`;

export const FormSearchStyle = styled.form`
    background-image: url('https://bit.ly/33QVyLX');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    padding: 4rem;
    margin-bottom: 2rem;
    fieldset {
        border: none;
        border-radius: 10px;
        background: #ffffff;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;

        input {
            width: 100%;
            padding: 10px;
            border: none;
        }

        button {
            padding: 15px 30px;
            border: none;
            background: #1E86FF;
            color: #ffff;
            border-radius: 4px;
        }
    }

`;

export const BackStyle = styled.span`
    color: #1E86FF;
`;

export const LiStyle = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 1rem;  
`;

export const FullTimeStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 2rem;
`;

export const LocationSearchStyle = styled.form`
    input {
        width: 96%;
        padding: 4% 2%;
        border: none;
        border-radius: 7px;
    }

    input::before {
        content: ''
    }
`;

export const UlStyle = styled.ul`
    padding: 0;
`;

export const DetailTitle = styled.div`
    display: flex;
    gap: 2%;
    button {
        height: 40px;
        width: 15%;
        align-self: center;
    }
    span {
        font-size: 12px;
        line-height: 14px;
        color: #B7BCCE;
    }
    a {
        color: #1E86FF;
    }
`
export const MoreDetailStyle = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    gap: 10px;
    img {
        width: 20%;
        height: 100px;
    }
    p {
        font-size: 12px;
        line-height: 14px;
        color: #B7BCCE;
    }
`

export const ApplicationStyle = styled.div`
    a {
        color: #1E86FF;
        word-break: break-all;
    }
`

export const DescStyle = styled.div`
    a {
        color: #1E86FF;
    }

    ul {
        padding: 0;
    }
`

export const PaginationStyle = styled.div`
    ul {
        margin-top: 30px;
        list-style: none;
        display: flex;
        padding: 0;
        justify-content: flex-end;
        li {
            padding: 6px 17px;
            border: 1px solid;
            border-radius: 7px;
            margin-right: 2%;
        }

        li:nth-of-type(1),
        li:last-of-type {
            display: none;
        }

        li:hover {
            border-color: #1E86FF;
        }

        .active_page {
            background: #1E86FF;
        }
    }
`