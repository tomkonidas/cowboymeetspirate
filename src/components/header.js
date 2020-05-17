import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import cmpLogo from "../images/cmp.png"
import { Wrapper } from "./styled/index"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.main};
  border-bottom: 3px solid ${({ theme }) => theme.colors.mainDark};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.mainDark};
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Wrapper>
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
    </Wrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
