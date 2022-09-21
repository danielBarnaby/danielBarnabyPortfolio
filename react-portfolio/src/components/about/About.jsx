import React from 'react'
import './about.css'
import ME from '../../assets/dbarnaby5.jpg'
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'

export default function About() {
  return (
    <section id='aboutSection'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Daniel Barnaby" />
            </div>
          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              
              <article className='about__card'>
                <FaUsers className='about__icon' />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about__card'>
                <FaFolderOpen className='about__icon' />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

          <p>
           I love to code! I enjoy puzzles and art. Coding brings both of these passions, of mine, together. It is wonderful to face new puzzles everyday. Bringing my ideas to life is another bonus!
          </p>

          <a href="#contactSection" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>

    </section>
  )
}
