import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import Footer from "./footer"

import GlobalStyles from "../theme/globalStyles"
import Theme from "../theme/theme"
import { Helmet } from "react-helmet"

const MainLayout = styled.main`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <meta property="og:title" content="Cowboy Meets Pirate" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cowboymeetspirate.com/og-cmp.jpg"
        />
        <meta property="og:description" content="Montreal Hard Rock" />
        <meta name="twitter:title" content="Cowboy Meets Pirate" />
        <meta
          name="twitter:image"
          content="https://cowboymeetspirate.com/og-cmp.jpg"
        />
        <meta name="twitter:description" content="Montreal Hard Rock" />
      </Helmet>
      <GlobalStyles />

      <MainLayout>{children}</MainLayout>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
