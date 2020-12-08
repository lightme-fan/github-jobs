import styled from 'styled-components';

export const ArticleStyle = styled.article`
    max-width: 1000px;
    margin: auto;
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
            border: none
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
`;

export const UlStyle = styled.ul`
    padding: 0;
`;