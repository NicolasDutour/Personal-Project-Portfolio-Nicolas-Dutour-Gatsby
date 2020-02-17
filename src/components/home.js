import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import SEO from "./seo"

const HeroDetails = styled.div`
  background-color: #90a4ae;
  opacity: 0.9;
  border-radius: 5px;
  text-align: center;
  color: #455a64;
  width: 55%;
  padding: 10px 0;

  /* Small screens */
  @media all and (max-width: 767px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 6px;
  margin-bottom: 20px;

  /* Small screens */
  @media all and (max-width: 767px) {
    font-size: 1.8rem;
  }
`

const SubTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 6px;
  margin-bottom: 20px;

  /* Small screens */
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const Details = styled.h3`
  font-size: 1.8rem;
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
  font-size: 1.5rem;
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 3px;
  width: 200px;
  display: block;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const StyledLink = styled(Link)`
  background: white;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 3px;
  text-decoration: none;
  display: block;
  width: 200px;
  color: ${props => props.theme.secondary};

  &:hover {
    color: ${props => props.theme.primary};
  }

  /* Small screens */
  @media all and (max-width: 767px) {
    margin-top: 10px;
  }
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
          backgroundColor={`#040e18`}
        >
          <SEO title="Home" />
          <HeroDetails>
            <Title>Nicolas Dutour</Title>
            <SubTitle>Développeur Web Autodidacte</SubTitle>

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
                Mon CV
              </Button>

              <StyledLink to="/projects">Mes Projets</StyledLink>
            </ButtonWrapper>
          </HeroDetails>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHome = styled(Home)`
  width: 100%;
  height: calc(100vh - 80px);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledHome
