import React from "react"
import styled from "styled-components"
import { FaRegFolderOpen, FaDumbbell } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import { Link } from "gatsby"

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
  background-color: black;
  border-bottom: 1px solid black;
  color: white;
  z-index: 3;

  @media all and (max-width: 600px) {
    display: none;
  }
`

const Menu = styled.footer`
  display: none;

  @media all and (max-width: 600px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    height: 80px;
    align-items: center;
    background-color: white;
    color: black;
    border-top: 2px solid ${props => props.theme.primary};
  }
`

const Author = styled.div`
  color: ${props => props.theme.primary};
  margin: 0 10px;
`

const StyledLinkMobile = styled(Link)`
  @media all and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.3rem;
    color: ${props => props.theme.secondary};
    cursor: pointer;
    height: 100%;

    &:focus,
    &:active {
      border: 1px solid ${props => props.theme.primary};
    }
  }
`

const StyledIconProjects = styled(IoMdContact)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

const StyledIconContact = styled(FaRegFolderOpen)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

const StyledIconSkills = styled(FaDumbbell)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

const LinkMenu = styled.div`
  font-size: 1rem;
`

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
