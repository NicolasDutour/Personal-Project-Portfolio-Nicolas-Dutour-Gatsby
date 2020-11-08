import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Title, SkillsContainer, Skill, DividerWrapper, Divider, SkillDetails, SkillGroup } from '../Styles/Skills'

const Skills = () => {

  const front = ['Html5', 'Css3']
  const front2 = ['Javascript', 'ReactJs', 'Gatsby']
  const tools = ['Material UI', 'Bootstrap', 'Styled-Components', 'Contentful']
  const python = ['Python', 'Django', 'PostgreSQL']
  const node = ['NodeJs', 'MongoDB']

  return (
    <Layout id="skills">
      <SEO title="Compétences" />
      <SkillDetails>
        <Title>Compétences</Title>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>

        <SkillsContainer>
          <SkillGroup>
            {front.map(item => (<Skill front>{item}</Skill>))}
          </SkillGroup>

          <SkillGroup>
            {front2.map(item => (<Skill front>{item}</Skill>))}
          </SkillGroup>

          <SkillGroup>
            {tools.map(item => (<Skill tools>{item}</Skill>))}
          </SkillGroup>

          <SkillGroup>
            {python.map(item => (<Skill python>{item}</Skill>))}
          </SkillGroup>

          <SkillGroup>
            {node.map(item => (<Skill node>{item}</Skill>))}
          </SkillGroup>
        </SkillsContainer>

      </SkillDetails>
    </Layout>
  )
}

export default Skills
