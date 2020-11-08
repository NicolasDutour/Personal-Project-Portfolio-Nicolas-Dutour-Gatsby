import React from "react"
import { FooterWrapper, Menu, Author, StyledLinkMobile, StyledIconProjects, StyledIconContact, StyledIconSkills, LinkMenu } from '../Styles/Footer'

const Footer = ({ siteAuthor }) => (
  <>
    <FooterWrapper>
      <div>© {new Date().getFullYear()}, développé par </div>
      <Author>{siteAuthor}</Author> <div>avec Gatsby et ContentFul</div>
    </FooterWrapper>
    <Menu>
      <StyledLinkMobile to="/skills">
        {" "}
        <StyledIconSkills /> <LinkMenu>Compétences</LinkMenu>
      </StyledLinkMobile>
      <StyledLinkMobile to="/projects">
        {" "}
        <StyledIconProjects /> <LinkMenu>Projets</LinkMenu>
      </StyledLinkMobile>
      <StyledLinkMobile to="/contact">
        {" "}
        <StyledIconContact /> <LinkMenu>Contact</LinkMenu>
      </StyledLinkMobile>
    </Menu>
  </>
)

export default Footer
