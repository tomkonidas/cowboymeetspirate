import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import cmpLogo from "../images/cmp.png"

const HeaderWrapper = styled.header`
  background: var(--pop);
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    padding: 5px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <img
            style={{
              width: `64px`,
              marginBottom: `0`,
              marginRight: `1rem`,
            }}
            src={cmpLogo}
            alt="Cowboy Meets Pirate Logo"
          />
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
      </div>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
