import styled from "styled-components"

export const ProjectsContainer = styled.div`
    background-color: #202330;
    color: white;
    height: 100%;
`

export const ProjectDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media all and (max-width: 960px) {
        margin-bottom: 10vh;
    }
`

export const Title = styled.h1`
    padding-top: 30px;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.secondary};
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