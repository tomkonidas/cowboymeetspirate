import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

import MailChimp from "../components/emailListForm"
import Socials from "../components/socials"
import logo from "../images/cmp.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/styled/index"

const SocialWrapper = styled.section`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2.7rem;
  margin: 2rem 0;
`

const CMP = styled.h1`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  font-family: "Streamster";

  @media ${({ theme }) => theme.screens.md} {
    font-size: 4rem;
  }
  @media ${({ theme }) => theme.screens.lg} {
    font-size: 6rem;
  }
  @media ${({ theme }) => theme.screens.xl} {
    font-size: 7rem;
  }
`
const Slogan = styled.h2`
  margin-bottom: 2rem;
  font-size: 0.785rem;
  color: #222;
  @media ${({ theme }) => theme.screens.md} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.screens.lg} {
    font-size: 2rem;
  }
`

const Banner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const Yellow = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.pop};
  align-items: center;

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
  }
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
          style={{
            boxShadow: `0 1px 4px rgba(0,0,0,.04)`,
            borderRadius: `5px`,
          }}
        />
      </Banner>
      <SocialWrapper>
        <Socials />
      </SocialWrapper>
      <Yellow>
        <div
          style={{
            backgroundColor: `black`,
            width: `100%`,
          }}
        >
          <img
            src={logo}
            alt="Cowboy Meets Pirate Logo"
            style={{
              padding: `7rem`,
              width: `100%`,
              height: `auto`,
            }}
          />
        </div>
        <MailChimp />
      </Yellow>
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
