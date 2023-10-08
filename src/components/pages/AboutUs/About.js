import React from 'react'
import './About.css'
import miya from '../../../assets/img/miya.jpg'

const About = () => {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-member'>
                <h2>Our Team</h2>
                <div className='member-card'>
                    <img className='member-img' src={miya} alt='Miya Doe'/>

                    <h3 className='member-name'>Aleena Hellenski</h3>
                    <p className='member-role'>CO-FOUNDER</p>
            </div>
        </div>
        <div className='about-us-description'>
            <h1 className='about-us-heading'>About Us</h1>
            <p>
            Education is the transmission of knowledge, skills, and character traits. There are many debates about
             its precise definition, for example, about which aims it
              tries to achieve. A further issue is whether part of the
              meaning of education is that the change in the student is an improvement.
            </p>
        </div>
    </div>
        </div>
  )
}

export default About