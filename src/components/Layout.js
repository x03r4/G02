import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div className='layout'>
        <Navbar />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Copyright 2022 - { author }</p>
        </footer>
    </div>
  )
}
