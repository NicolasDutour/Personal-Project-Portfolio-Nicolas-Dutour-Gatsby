import React from "react"
import { ProjectWrapper, ImageWrapper, Image, Title, Skills, ButtonsWrapper, Button, Description } from '../Styles/Project'

const Project = ({ data: { node: { thumbnail, webSiteName, languages, description, linkWebSite, linkGithub } } }) => {
  return (
    <ProjectWrapper>
      <ImageWrapper>
        <Image fluid={thumbnail.fluid} />
      </ImageWrapper>
      <Title> {webSiteName} </Title>
      <Skills> {languages} </Skills>
      <Description> {description} </Description>
      <ButtonsWrapper>
        <Button
          as="a"
          href={linkWebSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Web
        </Button>
        <Button
          as="a"
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
      </ButtonsWrapper>
    </ProjectWrapper>
  )
}

export default Project