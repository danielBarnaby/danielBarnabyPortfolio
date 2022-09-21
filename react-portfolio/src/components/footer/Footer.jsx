import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id='footerMain'>
        <a href="#" className='footer__logo'>Daniel Barnaby</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

          <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://instagram.com"><FaInstagramSquare /></a>
            <a href="https://twitter.com"><FaTwitterSquare /></a>
          </div>

          <div className="footer__copyright">
            <small>&copy; Daniel Barnaby Projects. All rights reserved.</small>
          </div>
    </footer>
  )
}
