import React from "react"
import { ProjectWrapper, ImageWrapper, Image, Title, Skills, Description } from '../Styles/Project'

const Project = ({ data: { node: { thumbnail, webSiteName, languages, description, linkWebSite, linkGithub } } }) => {
  return (
    <ProjectWrapper
      as="a"
      href={linkWebSite}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImageWrapper>
        <Image fluid={thumbnail.fluid} />
      </ImageWrapper>
      <Title> {webSiteName} </Title>
      <Skills> {languages} </Skills>
      <Description> {description} </Description>
    </ProjectWrapper>
  )
}

export default Project