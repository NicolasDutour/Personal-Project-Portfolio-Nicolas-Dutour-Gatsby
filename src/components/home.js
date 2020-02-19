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

  /* Small screens */
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

const Details = styled.h3`
  font-size: 1.3rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

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
            <Details>
              Expériences Utilisateurs, Interfaces Uniques, Performance
            </Details>
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
