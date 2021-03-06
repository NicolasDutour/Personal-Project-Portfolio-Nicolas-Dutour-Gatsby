import styled from "styled-components"

export const SkillDetails = styled.div`
    background-color: #202330;
    text-align: center;
    color: white;
`

export const Title = styled.h1`
    padding-top: 30px;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.secondary};
`

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;

    

    @media all and (max-width: 767px) {
        display: block;
        margin-bottom: 10vh;
    }
`

export const Skill = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #b12e1f;
    box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2);
    width: 180px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 20px 50px;

    @media all and (max-width: 960px) {
        margin: 0 10px 20px 10px;
    }
    @media all and (max-width: 767px) {
        width: 90%;
        justify-content: center;
        margin: auto;
    }
`

export const DividerWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

export const Divider = styled.div`
    width: 50px;
    height: 5px;
    background-color: #b12e1f;
`

export const SkillBis = styled.div`
    color: ${props => props.frontend ? "blue" : "red"};
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 30px 40px 0 rgba(212,217,232,.2);
`