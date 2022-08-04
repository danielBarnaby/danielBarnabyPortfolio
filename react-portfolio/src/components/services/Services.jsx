import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

export default function Services() {
  return (
    <section id="servicesSection">
        <h5>What I offer</h5>
        <h2>Services</h2>

{/* ========== **START** OF UX/UI CARD =============== */}
        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                </ul>
            </article>

{/* ========== END OF UI/UX CARD =============== */}

{/* ========== **START** OF WEB DEVELOPMENT CARD =============== */}

            <article className="service">
                <div className="service__head">
                    <h3>Web Devlopment</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                </ul>
            </article>
{/* ========== END OF WEB DEVELOPEMENT CARD =============== */}

{/* ========== **START** OF CONTENT CREATION CARD =============== */}
            
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                    
                    <li>
                        <BsCheckLg className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                </ul>
            </article>

{/* ========== END OF CONTENT CREATION CARD =============== */}

        </div>
    </section>
  )
}
