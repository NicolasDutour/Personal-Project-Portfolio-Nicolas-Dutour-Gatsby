import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"

const ProjectsContainer = styled.div`
  width: 80%;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-top: 30px;
  color: ${props => props.theme.secondary};
`

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #b12e1f;
  margin-bottom: 60px;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query getProjectsQuery {
      allContentfulProjects {
        edges {
          node {
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            webSiteName
            linkWebSite
            linkGithub
            languages
            description
            createdAt
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <Layout id="projects">
      <SEO title="Projets" />
      <Title>Projets</Title>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <ProjectsContainer>
        {data.allContentfulProjects.edges.map(edge => (
          <Project key={edge.node.contentful_id} data={edge} />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects
