import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Para, Description, DetailsWrapper, Title, SubTitle, StyledLink, Show, DividerWrapper, Divider, } from '../Styles/About'

const About = () => {
  return (
    <Layout id="about">
      <SEO title="Qui suis-je" />
      <DetailsWrapper>
        <Title>A Propos</Title>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>
        <SubTitle>Un développeur web passionné !</SubTitle>
        <Description>
          <Para>
            Ma passion pour le développement commence en 2017 suite à une envie
            de changement de vie professionnelle.{" "}
          </Para>
          <Para>
            J'ai commencé à apprendre de manière autodidacte grâce au site{" "}
            <StyledLink
              href="https://openclassrooms.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenClassrooms
            </StyledLink>
          </Para>
          <Para>
            Je décide, en 2018, d'approfondir mes compétences en suivant un des
            parcours proposés par OpenClassrooms. Celui de{" "}
            <StyledLink
              href="https://openclassrooms.com/fr/paths/48-developpeur-web-junior"
              target="_blank"
              rel="noopener noreferrer"
            >
              Développeur Web Junior
            </StyledLink>
            .
          </Para>
          <Para>
            Cela m'a permis de confirmer mes compétences en <Show>Html5</Show>,{" "}
            <Show>Css3</Show> et <Show>Javascript (ES6)</Show> mais aussi de
            monter en compétence sur <Show>ReactJs</Show>, <Show>Redux</Show>.
          </Para>
          <Para>
            Après avoir développé différents projets avec <Show>ReactJs</Show>,
            je me suis intéressé au back-end, notamment <Show>NodeJs</Show> et{" "}
            <Show>Python</Show> avec son Framework <Show>Django</Show>.
          </Para>
          <Para>
            Je développe également des sites web vitrines en freelance pour des
            clients en utilisant <Show>Gatsby</Show>.
          </Para>
          <Para>
            Je peux ainsi créer votre site sur
            mesure qui est performant, référencé naturellement (SEO), qui
            respecte les normes W3C et l'accessibilité.
          </Para>
          <Para>
            Pour les développeurs, vous pouvez aller voir mon profil{" "}
            <StyledLink
              href="https://github.com/NicolasDutour?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>{" "}
            pour découvrir d'autres projets.
          </Para>
        </Description>
      </DetailsWrapper>
    </Layout>
  )
}

export default About
