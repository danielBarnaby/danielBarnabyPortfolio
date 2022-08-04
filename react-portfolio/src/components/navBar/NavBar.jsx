import React from 'react'
import './navBar.css'

export default function NavBar() {
  return (
    <nav id='navBarNav'>
        <h1>Nav Bar</h1>
        <ul id='navBarList'>
            <a href=""><li>About</li></a>
            <a href=""><li>Skills</li></a>
            <a href=""><li>Experience</li></a>
            <a href=""><li>Portfolio</li></a>
            <a href=""><li>Contact</li></a>
        </ul>
    </nav>
  )
}
