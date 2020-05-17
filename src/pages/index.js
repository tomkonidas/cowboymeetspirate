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

const CMP = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
`
const Slogan = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const Banner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Banner>
        <CMP>Cowboy Meets Pirate</CMP>
        <Slogan>
          <span role="img" aria-label="skull and crossbones">
            ☠
          </span>{" "}
          Montreal Hard Rock{" "}
          <span role="img" aria-label="skull and crossbones">
            🏴‍☠️
          </span>
        </Slogan>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Cowboy Meets Pirate"
        />
      </Banner>
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
