import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description, author } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web Developer</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="banner" style={{ maxWidth:"100%"}}/>
        <p>{ title } - { description } - { author }</p>
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
}
`