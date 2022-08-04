import React from 'react'
import './nav.css'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { GiSecretBook, GiSkills } from 'react-icons/gi'
import { RiServiceFill, RiFolderOpenFill } from 'react-icons/ri'
import { MdMessage } from 'react-icons/md'
import { useState } from 'react'

export default function Nav() {
    const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#aboutSection" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>
        <a href="#experienceSection" onClick={() => setActiveNav('#experienceSection')} className={ activeNav === '#experienceSection' ? 'active' : ''}><GiSecretBook /></a>
        {/* <a href="#skillsSection" onClick={() => setActiveNav('#skillsSection')} className={ activeNav === '#skillsSection' ? 'active' : ''}><GiSkills /></a> */}
        <a href="#servicesSection" onClick={() => setActiveNav('#skillsSection')} className={ activeNav === '#skillsSection' ? 'active' : ''}><RiServiceFill /></a>
        {/* <a href="#contactSection" onClick={() => setActiveNav('#contactSection')} className={ activeNav === '#contactSection' ? 'active' : ''}><MdMessage /></a> */}
        <a href="#portfolioSection" onClick={() => setActiveNav('#portfolioSection')} className={ activeNav === '#contactSection' ? 'active' : ''}><RiFolderOpenFill /></a>
    </nav>
  )
}
