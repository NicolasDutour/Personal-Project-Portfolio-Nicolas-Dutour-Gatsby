import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
    margin-bottom: 30px;
  }

  @media (max-width: 1160px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`

const DetailsWrapper = styled.div`
  width: 70%;

  @media (max-width: 1160px) {
    flex-direction: column;
    margin-bottom: 30px;
    width: 80%;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
`
const StyledLink = styled.a`
  color: #b12e1f;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Show = styled.span`
  color: #b12e1f;
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

const About = () => {
  return (
    <Layout id="about">
      <SEO title="Qui suis-je" />
      <Title>A Propos</Title>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <AboutWrapper>
        <DetailsWrapper>
          <SubTitle>Un développeur web passionné !</SubTitle>
          <p>
            Ma passion pour le développement commence en 2017 suite à une envie
            de changement de vie professionnelle.{" "}
          </p>
          <p>
            J'ai commencé à apprendre de manière autodidacte grâce au site{" "}
            <StyledLink
              href="https://openclassrooms.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenClassrooms
            </StyledLink>
          </p>
          <p>
            Après quelques mois à coder sans relâche mais avec toujours autant
            de plaisir, je décide, en 2018, d'approfondir mes compétences en
            suivant un des parcours proposés par OpenClassrooms. Celui de{" "}
            <StyledLink
              href="https://openclassrooms.com/fr/paths/48-developpeur-web-junior"
              target="_blank"
              rel="noopener noreferrer"
            >
              Développeur Web Junior
            </StyledLink>
            .
          </p>
          <p>
            Cela m'a permis de confirmer mes compétences en <Show>Html5</Show>,{" "}
            <Show>Css3</Show> et <Show>Javascript (ES6)</Show> mais aussi de
            monter en compétence sur <Show>ReactJs</Show>, <Show>Redux</Show>.
          </p>
          <p>
            Après avoir développé différents projets avec <Show>ReactJs</Show>,
            je me suis intéressé au back-end, notamment <Show>NodeJs</Show> avec{" "}
            <Show>Express</Show> et <Show>MongoDB</Show>.
          </p>
          <p>
            Je développe également des sites web vitrines en freelance pour des
            clients en utilisant Gatsby. Je peux ainsi créer votre site sur
            mesure qui est performant, référencé naturellement (SEO), qui
            respecte les normes W3C et l'accessibilité.
          </p>
          <p>
            Votre site sera responsive. C'est à dire qu'il s'adaptera à tout
            type d'appareil (Ordinateurs, Tablettes, Mobile).
          </p>
          <p>
            Je m'occupe de mettre aussi en place un système de gestion de
            contenu avec ContentFul. Vous pouvez ainsi gérer tout seul l'ajout
            de textes et images sans mon intervention.
          </p>
          <p>
            Je mets pour vous en place votre site sur un hébergeur web et vous
            forme si vous le désirez sur l'utilisation de ContentFul.
          </p>
          <p>
            Pour les développeurs, vous pouvez aller voir mon profil{" "}
            <StyledLink
              href="https://github.com/NicolasDutour?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>{" "}
            pour découvrir d'autres projets.
          </p>
        </DetailsWrapper>
      </AboutWrapper>
    </Layout>
  )
}

export default About
