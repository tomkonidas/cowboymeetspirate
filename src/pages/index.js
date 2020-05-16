import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import cmpBand from "../images/cmp-band.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <img
        style={{
          width: `100%`,
        }}
        src={cmpBand}
        alt="Cowboy Meets Pirate"
      />
    </div>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
