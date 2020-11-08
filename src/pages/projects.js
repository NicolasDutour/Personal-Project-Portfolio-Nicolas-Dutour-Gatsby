import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Project from "../components/project"

import { ProjectsContainer, Title, DividerWrapper, Divider, ProjectDetails } from '../Styles/Projects'

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
      <ProjectsContainer>
        <Title>Projets</Title>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>
        <ProjectDetails>
          {data.allContentfulProjects.edges.map(edge => (
            <Project key={edge.node.contentful_id} data={edge} />
          ))}
        </ProjectDetails>
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects
