import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/projectPics/cookd1.png'
import Image2 from '../../assets/projectPics/cookd2.png'
import Image3 from '../../assets/projectPics/cookd3.png'
import Image4 from '../../assets/projectPics/cookd4.png'
import Image5 from '../../assets/projectPics/mikalaBio.png'
import Image6 from '../../assets/projectPics/productLanding.png'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Cook'd",
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953318-Cook-d-is-a-site-I-built-to-match-recipes-to-users-ingredients'
  },
  {
    id: 2,
    image: Image2,
    title: "Cook'd",
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953696-Cook-d'
  },
  {
    id: 3,
    image: Image3,
    title: "Cook'd",
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953698-Cook-d'
  },
  {
    id: 4,
    image: Image4,
    title: "Cook'd",
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953705-Cook-d'
  },
  {
    id: 5,
    image: Image5,
    title: 'Character Bio',
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953725-Character-Bio-Page'
  },
  {
    id: 6,
    image: Image6,
    title: 'Product Landing Page',
    github: 'https://github.com/danielBarnaby',
    demo: 'https://dribbble.com/shots/18953722-Product-Landing-Page'
  },
]

export default function Portfolio() {
  return (
        <section id='portfolioSection'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
              {
                data.map(({id, image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={github} className="btn" target='_blank'>GitHub</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                      </div>
                    </article>
                  )  // END **RETURN
                })   // END **MAP METHOD
              }      {/* END **JavaScript MODE */}
            </div>
            
        </section>
  )
}
