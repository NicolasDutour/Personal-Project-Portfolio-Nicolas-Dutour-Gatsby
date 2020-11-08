import React, { useState } from "react"
import { HeaderContainer, Navbar, Navlinks, NavlinksMobile, StyledMenu, Logo, StyledLink, } from '../Styles/Header'

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)

  const openMenu = () => {
    setToggle(!toggle)
  }

  return (
    <HeaderContainer>
      <Navbar>
        <Logo to="/">{siteTitle}</Logo>
        <StyledMenu onClick={openMenu} />
        <Navlinks>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A Propos</StyledLink>
          <StyledLink to="/skills">Compétences</StyledLink>
          <StyledLink to="/projects">Projets</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Navlinks>
        {toggle && (
          <NavlinksMobile>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/about">A Propos</StyledLink>
            <StyledLink to="/skills">Compétences</StyledLink>
            <StyledLink to="/projects">Projets</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavlinksMobile>
        )}
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
