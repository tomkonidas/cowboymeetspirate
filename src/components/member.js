import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const Member = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>
          {data.markdownRemark.frontmatter.emoji}{" "}
          {data.markdownRemark.frontmatter.name}
        </h1>
        <h2>{data.markdownRemark.frontmatter.position}</h2>
        <blockquote>{data.markdownRemark.frontmatter.oneLiner}</blockquote>
        <p>{data.markdownRemark.frontmatter.description}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <p>{data.markdownRemark.frontmatter.funFacts}</p>
        <p>{data.markdownRemark.frontmatter.socials}</p>
      </Layout>
    </>
  )
}

export const query = graphql`
  query MemberQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        name
        oneLiner
        position
        emoji
        description
        funFacts
        socials
      }
    }
  }
`

export default Member
