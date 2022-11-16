import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
// import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2 data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          Portfolio
        </h2>
        <h3 data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          Projects & Websites I've Created
        </h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link
              to={"/projects/" + project.frontmatter.slug}
              key={project.id}
            >
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                />
                <h3
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {project.frontmatter.title}
                </h3>
                <p
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {project.frontmatter.stack}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
