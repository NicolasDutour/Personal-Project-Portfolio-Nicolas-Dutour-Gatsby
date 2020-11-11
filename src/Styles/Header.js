import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #202330;
  border-bottom: 1px solid white;
  height: 10vh;
`

export const Navbar = styled.nav`
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

export const Navlinks = styled.div`
  grid-area: navlinks;

  @media all and (max-width: 850px) {
    display: none;
  }
`

export const NavlinksMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 80px;
  width: 100%;
  background-color: #202330;
  border-top: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};
`

export const StyledMenu = styled(FaAlignRight)`
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

export const Logo = styled(Link)`
  display: block;
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
    font-size: 1.3rem;
  }
`

export const StyledLink = styled(Link)`
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

  @media all and (max-width: 850px) {
    font-size: 1.5rem;
    padding: 5px 0;
  }

  @media all and (min-width: 851px) and (max-width: 1150px) {
    margin-left: 10px;
    font-size: 1rem;
  }
`