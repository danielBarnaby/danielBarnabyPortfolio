import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { FaHtml5, FaReact, FaBootstrap, FaNode } from 'react-icons/fa'
import { SiCss3, SiJquery, SiMongodb, SiAliexpress } from 'react-icons/si'

export default function Experience() {
  return (
    <section id='experienceSection'>
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            
            <h3>Frontend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML<FaHtml5 className='languageIcons'/></h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS<SiCss3 className='languageIcons'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Bootstrap<FaBootstrap className='languageIcons'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Javascript<IoLogoJavascript className='languageIcons' /></h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>React<FaReact className='languageIcons'/></h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>jQuery<SiJquery className='languageIcons'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

{/* ============= END OF FRONTEND =================== */}
            </div>
          </div>
          <div className="experience__backend">

          <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Express<SiAliexpress className='languageIcons smallLngIcon'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB<SiMongodb className='languageIcons'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node<FaNode className='languageIcons medLngIcon'/></h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

            </div>
          </div>
        </div>
    </section>
  )
}
