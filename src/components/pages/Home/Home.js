import React from 'react'
import './Home.css'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {

    const handleClick=()=>{
        window.open('https://youtube.com/@BrototypeMalayalam?si=lPuFCN4vVm0p1opW','_blank')
    }
  return (
    <>
    <section>
        <div className='container'>
            <div className='home_container'>
                <div className='home_content'>

                    <h1 className='section_title'>
                        Learn Everything For Free!!
                    </h1>
                    <p>Master Trending Technologies with Techflix AI, Invest Your Time And Return skill</p>
                     
                     <div className='home_btns'>
                        <button className='register_btn' onClick={handleClick}>Get Started</button>
                        <button className='register_btn' onClick={handleClick}>Watch Now</button>
                    </div>
                </div>
                <div className='home_img'>
                    <div className='home-img-wrapper'>
                        <div className='box-01'>



                            <div className='box-img'>
                                <img src={meta} alt=''/>
                            </div>

                        </div>
                        <div className='whatsapp-container'>
                            <h4>500 + students</h4>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className='support'>
                            <h4>Active Support</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home