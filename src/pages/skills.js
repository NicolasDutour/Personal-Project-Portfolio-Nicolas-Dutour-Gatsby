import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin: 10px 0 40px 0;
  color: #b12e1f;
  text-align: center;
`

const SkillsContainer = styled.div`
  width: 80%;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Name = styled.div`
  font-size: 1rem;
`

const Skill = styled.div`
  width: 20%;
  text-align: center;
  margin-bottom: 20px;

  @media all and (max-width: 576px) {
    width: 50%;
  }

  @media all and (min-width: 577px) and (max-width: 960px) {
    width: 30%;
  }
`

const StyledImage = styled(Img)`
  border-radius: 100px;
  transition: 1s;

  &:hover {
    transition: 1s;
    transform: rotate(360deg);
  }
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
`

const Skills = () => {
  const data = useStaticQuery(graphql`
    query getImagesQuery {
      frontend: allFile(filter: { relativeDirectory: { eq: "frontend" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      backend: allFile(filter: { relativeDirectory: { eq: "backend" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      tools: allFile(filter: { relativeDirectory: { eq: "tools" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout id="skills">
      <SEO title="Compétences" />
      <Title>Compétences</Title>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>

      <SubTitle>Frontend</SubTitle>
      <SkillsContainer>
        {data.frontend.edges.map(edge => (
          <Skill key={edge.node.id}>
            <StyledImage fixed={edge.node.childImageSharp.fixed} />
            <Name>{edge.node.name.toUpperCase().replace("_", " ")}</Name>
          </Skill>
        ))}
      </SkillsContainer>

      <SubTitle>Backend</SubTitle>
      <SkillsContainer>
        {data.backend.edges.map(edge => (
          <Skill key={edge.node.id}>
            <StyledImage fixed={edge.node.childImageSharp.fixed} />
            <Name>{edge.node.name.toUpperCase().replace("_", " ")}</Name>
          </Skill>
        ))}
      </SkillsContainer>

      <SubTitle>Outils</SubTitle>
      <SkillsContainer>
        {data.tools.edges.map(edge => (
          <Skill key={edge.node.id}>
            <StyledImage fixed={edge.node.childImageSharp.fixed} />
            <Name>{edge.node.name.toUpperCase().replace("_", " ")}</Name>
          </Skill>
        ))}
      </SkillsContainer>
    </Layout>
  )
}

export default Skills
