import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import SEO from "./seo"
import { MdFileDownload } from "react-icons/md"

import Slider from "./slider"

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(#000, #424242);
  opacity: 0.8;
  z-index: 1;
`

const HeroDetails = styled.div`
  opacity: 0.9;
  text-align: center;
  width: 55%;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  @media all and (max-width: 767px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 10px;
  color: white;
  @media all and (max-width: 767px) {
    display: none;
    font-size: 1.5rem;
  }
`

const SubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 10px;
  color: white;
  @media all and (max-width: 767px) {
    display: none;
    font-size: 1.2rem;
  }
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  margin-bottom: 10px;
  font-size: 1.5rem;
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  /* Small screens */
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  background: white;
  color: ${props => props.theme.secondary};
  font-size: 1.2rem;
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 10px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const StyledLink = styled(Link)`
  background: white;
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  color: ${props => props.theme.secondary};

  &:hover {
    color: ${props => props.theme.primary};
  }

  /* Small screens */
  @media all and (max-width: 767px) {
    display: none;
  }
`

const StyledMdFileDownload = styled(MdFileDownload)`
  font-size: 1.8rem;
  color: ${props => props.theme.primary};
`

const Home = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cv: contentfulCv {
          cv {
            file {
              url
              fileName
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          id="home"
          Tag="section"
          className={className}
          fluid={imageData}
        >
          <Overlay />
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
                download="cv"
                target="_blank"
              >
                <StyledMdFileDownload /> <div>Mon CV</div>
              </Button>

              <StyledLink to="/projects">
                <div>Mes Projets</div>
              </StyledLink>
            </ButtonWrapper>
            <Slider />
          </HeroDetails>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHome = styled(Home)`
  width: 100%;
  height: calc(100vh - 160px);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledHome
