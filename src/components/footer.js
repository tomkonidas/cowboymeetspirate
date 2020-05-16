import React from "react"

import cmpLogo from "../images/cmp.png"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
