import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

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
  const data = useStaticQuery(graphql`
    query getSkills {
      allContentfulSkills {
        edges {
          node {
            frontend
            backend
            tools
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

      <SkillsContainer>
        <SkillTitle>Frontend</SkillTitle>
        <SkillsList>
          {data.allContentfulSkills.edges.map(edge =>
            edge.node.frontend.map(skill => <Skill> {skill} </Skill>)
          )}
        </SkillsList>
      </SkillsContainer>

      <SkillsContainer>
        <SkillTitle>Backend</SkillTitle>
        <SkillsList>
          {data.allContentfulSkills.edges.map(edge =>
            edge.node.backend.map(skill => <Skill> {skill} </Skill>)
          )}
        </SkillsList>
      </SkillsContainer>

      <SkillsContainer>
        <SkillTitle>Outils</SkillTitle>
        <SkillsList>
          {data.allContentfulSkills.edges.map(edge =>
            edge.node.tools.map(skill => <Skill> {skill} </Skill>)
          )}
        </SkillsList>
      </SkillsContainer>
    </Layout>
  )
}

export default Skills
