import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import { Main } from '../Styles/Main'

const theme = {
  primary: "#b12e1f",
  secondary: "#fff",
  grey: "#767676"
}



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

  const { title, author } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      {/* <MainSite> */}
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <Footer siteAuthor={author} />
      {/* </MainSite> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
