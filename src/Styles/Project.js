import styled from "styled-components"
import Img from "gatsby-image"

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 10px;
    padding: 10px;
    text-align: center;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2);

    &:hover {
        box-shadow: 0 20px 20px rgba(177,46,30,0.2), 0px 0px 50px rgba(177,46,30,0.2);
    }

    @media all and (max-width: 960px) {
        width: 90%;
    }
`

export const ImageWrapper = styled.div`
    height: 200px;
`

export const Image = styled(Img)`
    width: 100%;
    height: 100%;
    border-radius: 20px;

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