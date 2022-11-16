import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
// import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const { title, description, author } = data.site.siteMetadata
  // const { fluid } = data.file.childImageSharp
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 
          data-sal="slide-up" 
          data-sal-easing="ease"
          data-sal-duration="1000"
        >Design</h2>
          <h3 
          data-sal="slide-up" 
          data-sal-easing="ease"
          data-sal-duration="800"
        >Develop & Deploy</h3>
          <p 
          data-sal="slide-up" 
          data-sal-easing="ease"
          data-sal-duration="1000"
          data-sal-delay="200"
        >UX Designer & Web Developer</p>
          {/* <p>
            {title} - {description} - {author}
          </p> */}
          <Link to="/projects" className={styles.btn} 
          data-sal="slide-up" 
          data-sal-easing="ease"
          data-sal-duration="1000"
          data-sal-delay="300"
        >
            My Portfolio Projects
          </Link>
        </div>
        {/* <Img fluid={fluid} /> */}
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} 
         
         data-sal="slide-up" 
         data-sal-delay="300" 
         data-sal-easing="fade"
       />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        description
        title
        author
      }
    }

    file(relativePath: { eq: "banner2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
