import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/styled/index"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="Cowboy Meets Pirate" />
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query Band {
    file(relativePath: { regex: "/cmp-band/" }) {
      size
      name
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
