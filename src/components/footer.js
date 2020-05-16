import React from "react"

import cmpLogo from "../images/cmp.png"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        textAlign: "center",
      }}
    >
      © {new Date().getFullYear()} {siteTitle}
    </div>
    <img
      style={{
        width: "128px",
        margin: "auto",
        marginTop: "1rem",
      }}
      src={cmpLogo}
      alt="Cowboy Meets Pirate Logo"
    />
  </footer>
)

export default Footer
