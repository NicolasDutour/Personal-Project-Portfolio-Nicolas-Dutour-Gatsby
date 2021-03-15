import styled from "styled-components"
import { MdFileDownload } from "react-icons/md"
import { Link } from "gatsby"

export const HeroDetails = styled.div`
    background-color: #202330;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

    @media all and (max-width: 767px) {
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    margin-top: 10px;
    color: white;
    
    @media all and (max-width: 767px) {
        font-size: 3rem;
    }
`

export const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-top: 10px;
    color: white;
    @media all and (max-width: 767px) {
        font-size: 2rem;
    }
`

export const Ul = styled.ul`
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;
`

export const Li = styled.li`
    margin-bottom: 10px;
    font-size: 1.5rem;
    @media all and (max-width: 767px) {
    font-size: 1.4rem;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    /* Small screens */
    @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`

export const Button = styled.button`
    background: white;
    color: ${props => props.theme.grey};
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 10px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 10px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.primary};
    }

    @media all and (max-width: 767px) {
    margin-bottom: 10px;
    }
`

export const StyledLink = styled(Link)`
    background: white;
    font-size: 1.2rem;
    padding: 10px 10px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    color: ${props => props.theme.grey};
    font-weight: bold;

    &:hover {
        color: ${props => props.theme.primary};
    }

    /* Small screens */
        @media all and (max-width: 767px) {
        display: none;
    }
`

export const StyledMdFileDownload = styled(MdFileDownload)`
    font-size: 1.8rem;
    color: ${props => props.theme.primary};
`