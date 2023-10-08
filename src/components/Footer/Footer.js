import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-wrapper'>

                    <div className='footer-box'>
                        <div className='logo'>
                            <div className='logo-img'>
                                <img src={footer} alt='' />
                            </div>
                            <h2>TechSkill AI</h2>

                        </div>
                        <p>Embrace the future ofinnovation with our cutting edge tech business solutions</p>

                    </div>
                    <div className='footer-box'>
                        <h4 className='footer_title'>Company</h4>
                        <ul className='footer_links'>
                            <li>
                                Our Programs
                            </li>
                            <li>
                                Our Plan
                            </li>
                            <li>
                                <a href=''>Become a member</a>
                            </li>

                        </ul>

                    </div>
                    <div className='footer-box'>

                        <h4 className='footer_title'>Quick Links</h4>
                        <ul className='footer_links'>
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                Support Us
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer