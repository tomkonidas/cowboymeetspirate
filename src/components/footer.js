import React from "react"

import cmpLogo from "../images/cmp.png"

const Footer = () => (
  <footer
    style={{
      display: `flex`,
      flexDirection: `column`,
      margin: `2rem`,
    }}
  >
    <div
      style={{
        textAlign: `center`,
      }}
    >
      © {new Date().getFullYear()} Cowboy Meets Pirate
    </div>
    <img
      style={{
        width: `64px`,
        margin: `auto`,
        marginTop: `1rem`,
      }}
      src={cmpLogo}
      alt="Cowboy Meets Pirate Logo"
    />
  </footer>
)

export default Footer
