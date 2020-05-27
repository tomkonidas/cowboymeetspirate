import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import GlobalStyles from "../theme/globalStyles"
import Theme from "../theme/theme"
import { Helmet } from "react-helmet"

const MainLayout = styled.main`
  margin: 0 auto;
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
      <Helmet>
        <meta property="og:title" content="Cowboy Meets Pirate" />
        <meta
          property="og:image"
          content="https://cowboymeetspirate.com/og-cmp.jpg"
        />
        <meta property="og:description" content="Montreal Hard Rock" />
        <meta property="twitter:title" content="Cowboy Meets Pirate" />
        <meta
          property="twitter:image"
          content="https://cowboymeetspirate.com/og-cmp.jpg"
        />
        <meta property="twitter:description" content="Montreal Hard Rock" />
      </Helmet>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
