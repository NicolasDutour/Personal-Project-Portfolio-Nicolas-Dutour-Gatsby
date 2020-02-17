import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const theme = {
  primary: "#b12e1f",
  secondary: "#767676",
}

const Main = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
