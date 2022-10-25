import { Link } from 'gatsby'
import React from 'react'

export default function 
() {
  return (
    <nav>
        <h1>C02</h1>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    </nav>
  )
}
