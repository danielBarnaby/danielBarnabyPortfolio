import React from 'react'
import CV from '../../assets/resumes/danielbarnabyresume1.docx'
// import CV from '../../assets/resumes/DanielBarnabyResumePDF.pdf'

export default function CTA() {
  return (
    <div className="cta">
        <a href={ CV } download className='btn'>Download CV</a>
        <a href="#contactSection" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
