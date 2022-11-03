import React from "react"
import Layout from "../../components/Layout"
import * as projects from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={ projects.portfolio }>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}
