import styled from "styled-components"
import Img from "gatsby-image"

export const ProjectWrapper = styled.div`
    margin: 15px 10px;
    text-align: center;
    width: 300px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media all and (max-width: 960px) {
        width: 90%;
    }
`

export const ImageWrapper = styled.div`
    border-bottom: 1px solid ${props => props.theme.primary};
    height: 200px;
`

export const Image = styled(Img)`
    width: 100%;
    height: 100%;
`

export const Title = styled.h4`
    margin-top: 10px;
`

export const Skills = styled.p`
    color: ${props => props.theme.primary};
    font-weight: bold;
`

export const Description = styled.div`

`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
`

export const Button = styled.button`
    background-color: ${props => props.theme.primary};
    color: #fff;
    width: 100px;
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.5s, color 0.5s;
    border: 1px solid ${props => props.theme.primary};
    text-decoration: none;

    &:hover {
        color: white;
        background-color: white;
        color: ${props => props.theme.primary};
    }
`