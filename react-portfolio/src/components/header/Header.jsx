import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dbarnabyCrop1.png'
import HeaderSocials from './HeaderSocials'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function Header() {

  // const [firstState, setFirstState] = useState(false)

  return (
    <header>
        <div id='headerDiv' className="container header__container">   
          <h5>Hello I'm</h5>
          <h1>Daniel Barnaby</h1>
          {/* <h5 className="text-light" onClick={setFirstState(!firstState)}>Fullstack Developer</h5> */}
          <CTA />
          <HeaderSocials />

          <div className="me">
              <img src={ME} alt="Daniel Barnaby" />
          </div>

          <a href="#contactSection" className='scroll__down'>Scroll Down<BiRightArrowAlt /></a>

        </div>
    </header>
  )
}
