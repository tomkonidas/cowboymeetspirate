import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

import MailChimp from "../components/emailListForm"
import Socials from "../components/socials"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/styled/index"

const SocialWrapper = styled.section`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 2.7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="Cowboy Meets Pirate" />
      <SocialWrapper>
        <Socials />
        <MailChimp />
      </SocialWrapper>
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
