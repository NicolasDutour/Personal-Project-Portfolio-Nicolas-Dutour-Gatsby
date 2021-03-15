import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Title, SkillsContainer, Skill, DividerWrapper, Divider, SkillDetails } from '../Styles/Skills'

const Skills = () => {

  const skills = ['Html5', 'Css3', 'Javascript', 'ReactJs', 'Gatsby', 'NextJs', 'Material UI', 'Bootstrap', 'Styled-Components', 'Contentful']

  return (
    <Layout id="skills">
      <SEO title="Compétences" />
      <SkillDetails>
        <Title>Compétences</Title>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>

        <SkillsContainer>
          {skills.map((item, index) => (<Skill key={index} front>{item}</Skill>))}
        </SkillsContainer>

      </SkillDetails>
    </Layout>
  )
}

export default Skills
