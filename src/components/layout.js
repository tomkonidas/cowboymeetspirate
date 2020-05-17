import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import GlobalStyles from "../theme/globalStyles"
import Theme from "../theme/theme"

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainLayout>{children}</MainLayout>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
