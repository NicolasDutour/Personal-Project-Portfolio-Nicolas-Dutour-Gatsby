import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectWrapper = styled.div`
  box-shadow: 0px 7px 9px 0px rgba(92, 88, 92, 1);
  margin: 10px 20px;
  text-align: center;
  padding: 10px;
  width: 30%;
  min-width: 320px;
  @media all and (max-width: 960px) {
    width: 90%;
  }
`

const ImageWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  height: 200px;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const Title = styled.h4`
  margin-top: 10px;
`

const Skills = styled.p`
  color: ${props => props.theme.primary};
  font-weight: bold;
`

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  width: 100px;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.5s, color 0.5s;
  border: 1px solid ${props => props.theme.primary};
  &:hover {
    color: white;
    text-decoration: none;
    background-color: white;
    color: ${props => props.theme.primary};
  }
`

export default function Project({ data }) {
  return (
    <ProjectWrapper>
      <ImageWrapper>
        <Image fluid={data.node.thumbnail.fluid} />
      </ImageWrapper>
      <div>
        <Title> {data.node.webSiteName} </Title>
        <Skills> {data.node.languages} </Skills>
        <p> {data.node.description} </p>
        <Button
          as="a"
          href={data.node.linkWebSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Web
        </Button>
        <Button
          as="a"
          href={data.node.linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
      </div>
    </ProjectWrapper>
  )
}
