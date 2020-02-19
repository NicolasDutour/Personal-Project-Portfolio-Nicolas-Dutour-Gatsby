import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`

const SkillsContainer = styled.div`
  width: 90%;
  margin: 0 auto 40px auto;
  border-right: 2px solid ${props => props.theme.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;

  @media all and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 0;
  }
`

const SkillTitle = styled.div`
  font-size: 2rem;
  padding: 10px;
  color: ${props => props.theme.primary};
`

const SkillsList = styled.div`
  background-color: #0277bd;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: white;
    border: 1px solid #0277bd;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
  }
`

const Skill = styled.div`
  font-size: 1.2rem;
  color: white;
  margin-right: 20px;

  @media all and (max-width: 767px) {
    color: black;
    margin-right: 0;
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
  // const data = useStaticQuery(graphql`
  //   query getImagesQuery {
  //     frontend: allFile(filter: { relativeDirectory: { eq: "frontend" } }) {
  //       edges {
  //         node {
  //           id
  //           name
  //           childImageSharp {
  //             fixed(width: 80, height: 80) {
  //               ...GatsbyImageSharpFixed
  //             }
  //           }
  //         }
  //       }
  //     }
  //     backend: allFile(filter: { relativeDirectory: { eq: "backend" } }) {
  //       edges {
  //         node {
  //           id
  //           name
  //           childImageSharp {
  //             fixed(width: 80, height: 80) {
  //               ...GatsbyImageSharpFixed
  //             }
  //           }
  //         }
  //       }
  //     }
  //     tools: allFile(filter: { relativeDirectory: { eq: "tools" } }) {
  //       edges {
  //         node {
  //           id
  //           name
  //           childImageSharp {
  //             fixed(width: 80, height: 80) {
  //               ...GatsbyImageSharpFixed
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout id="skills">
      <SEO title="Compétences" />
      <Title>Compétences</Title>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>

      <SkillsContainer>
        <SkillTitle>Frontend</SkillTitle>
        <SkillsList>
          <Skill>Html5</Skill>
          <Skill>Css3</Skill>
          <Skill>Javascript</Skill>
          <Skill>jQuery</Skill>
          <Skill>ReactJs</Skill>
          <Skill>Redux</Skill>
          <Skill>Bootstrap</Skill>
          <Skill>Material UI</Skill>
          <Skill>Styled Components (Css-in-Js)</Skill>
          <Skill>Gatsby</Skill>
        </SkillsList>
      </SkillsContainer>

      <SkillsContainer>
        <SkillTitle>Backend</SkillTitle>
        <SkillsList>
          <Skill>NodeJs</Skill>
          <Skill>Express</Skill>
          <Skill>MongoDB</Skill>
          <Skill>GraphQL</Skill>
          <Skill>Python</Skill>
          <Skill>Django (DRF)</Skill>
          <Skill>PostGreSQL</Skill>
        </SkillsList>
      </SkillsContainer>

      <SkillsContainer>
        <SkillTitle>Outils</SkillTitle>
        <SkillsList>
          <Skill>Git</Skill>
          <Skill>Github</Skill>
          <Skill>Postman</Skill>
          <Skill>Slack</Skill>
          <Skill>Trello</Skill>
          <Skill>ContentFul</Skill>
          <Skill>Netlify</Skill>
        </SkillsList>
      </SkillsContainer>

      {/* <SubTitle>Frontend</SubTitle>
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
      </SkillsContainer> */}
    </Layout>
  )
}

export default Skills
