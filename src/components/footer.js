import React from "react"
import { Menu, StyledLinkMobile, StyledIconProjects, StyledIconContact, StyledIconSkills, LinkMenu } from '../Styles/Footer'

const Footer = () => (
  <>
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
