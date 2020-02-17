import React from "react"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 2px -2px ${props => props.theme.secondary};
  height: 80px;
  z-index: 999;
`

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "logo navlinks";
  justify-items: center;
  align-items: center;

  @media all and (max-width: 850px) {
    grid-template-areas: "logo menu";
  }
`

const Navlinks = styled.div`
  grid-area: navlinks;

  @media all and (max-width: 850px) {
    display: none;
  }
`

const StyledMenu = styled(FaAlignRight)`
  display: none;

  @media all and (max-width: 850px) {
    grid-area: menu;
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
    justify-self: end;
    margin-right: 10px;
  }
`

const Logo = styled(Link)`
  grid-area: logo;
  text-decoration: none;
  font-size: 2rem;
  color: ${props => props.theme.secondary};
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.5s, color 0.5s;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
  }

  @media all and (max-width: 1150px) {
    font-size: 1.5rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  font-size: 1.3rem;
  color: ${props => props.theme.secondary};
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.5s, color 0.5s;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
  }

  @media all and (max-width: 1150px) {
    margin-left: 10px;
    font-size: 1rem;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <Navbar>
        <Logo to="/">{siteTitle}</Logo>
        <StyledMenu />
        <Navlinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">A Propos</StyledLink>
          <StyledLink to="/skills">Compétences</StyledLink>
          <StyledLink to="/projects">Projets</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Navlinks>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
