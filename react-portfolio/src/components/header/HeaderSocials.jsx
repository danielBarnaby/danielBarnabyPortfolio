import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/daniel-barnaby-8080b2247" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/danielBarnaby" target='_blank'><BsGithub /></a>
        <a href="https://dribbble.com/danielBarnaby" target='_blank'><BsDribbble /></a>
    </div>
  )
}
