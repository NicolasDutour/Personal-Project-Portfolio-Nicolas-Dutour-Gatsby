import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Non Trouvée" />
    <h1>Page Non Trouvée</h1>
    <p>Oups ! Cette page n'existe pas !</p>
  </Layout>
)

export default NotFoundPage
