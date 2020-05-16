/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const TEAM_MEMBERS_QUERY = graphql`
  query TeamMembers {
    allMarkdownRemark(sort: { fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            slug
            name
          }
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(TEAM_MEMBERS_QUERY)

  return (
    <>
      <section>
        {data.allMarkdownRemark.edges.map(edge => (
          <div key={edge.node.frontmatter.slug}>
            <Link to={`/team${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.emoji} {edge.node.frontmatter.name}
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default Team
