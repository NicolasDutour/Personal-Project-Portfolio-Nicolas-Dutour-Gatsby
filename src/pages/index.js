import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeroDetails, Title, SubTitle, Ul, Li, ButtonWrapper, Button, StyledLink, StyledMdFileDownload } from '../Styles/Home'

const Home = () => {
  const data = useStaticQuery(graphql`
    query getCV {
      cv: contentfulCv {
        cv {
          file {
            url
            fileName
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroDetails>
        <Title>Nicolas Dutour</Title>
        <SubTitle>Développeur Web Autodidacte</SubTitle>

        <Ul>
          <Li>Expériences Utilisateurs</Li>
          <Li>Interfaces Uniques</Li>
          <Li>Performance</Li>
        </Ul>

        <ButtonWrapper>
          <Button
            as="a"
            href={data.cv.cv.file.url}
            rel="noopener"
            download="cv"
            target="_blank"
          >
            <StyledMdFileDownload /> <div>Mon CV</div>
          </Button>

          <StyledLink to="/projects">
            <div>Mes Projets</div>
          </StyledLink>
        </ButtonWrapper>
      </HeroDetails>
    </Layout>
  )
}

export default Home
