import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: black;
  border-bottom: 1px solid black;
  color: white;

  @media all and (max-width: 600px) {
    padding: 10px 0;
    flex-direction: column;
  }
`

const StyledLink = styled.a`
  color: ${props => props.theme.primary};
  margin: 0 10px;

  &:hover {
    color: ${props => props.theme.primary};
  }

  @media all and (max-width: 600px) {
    margin: 10px 0;
  }
`

const Footer = ({ siteAuthor }) => (
  <FooterWrapper>
    <div>© {new Date().getFullYear()}, développé par </div>
    <StyledLink
      href="https://www.nicolasdutour.com"
      target="_blank"
      rel="noopener"
    >
      {siteAuthor}
    </StyledLink>{" "}
    <div>avec Gatsby et ContentFul</div>
  </FooterWrapper>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
