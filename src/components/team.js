/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    query TeamMembers {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              name
              emoji
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <section>
        <h3>The Fam Jam!</h3>
        {data.allMarkdownRemark.edges.map(edge => (
          <p>
            {edge.node.frontmatter.emoji} {edge.node.frontmatter.name}
          </p>
        ))}
      </section>
    </>
  )
}

export default Team
