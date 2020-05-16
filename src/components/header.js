import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import cmpLogo from "../images/cmp.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "128px",
              marginBottom: "0",
            }}
            src={cmpLogo}
            alt="Cowboy Meets Pirate Logo"
          />
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
