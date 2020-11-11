import styled from "styled-components"
import { FaRegFolderOpen, FaDumbbell } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  background-color: #202330;
  color: white;

  @media all and (max-width: 600px) {
    display: none;
  }
`

export const Menu = styled.footer`
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

export const Author = styled.div`
  color: ${props => props.theme.primary};
  margin: 0 10px;
`

export const StyledLinkMobile = styled(Link)`
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

export const StyledIconProjects = styled(IoMdContact)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

export const StyledIconContact = styled(FaRegFolderOpen)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

export const StyledIconSkills = styled(FaDumbbell)`
  @media all and (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

export const LinkMenu = styled.div`
  font-size: 1rem;
`