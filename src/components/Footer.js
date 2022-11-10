import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <footer>
        <p>Copyright 2022 - { author }</p>
    </footer>
  )
}

export default Footer