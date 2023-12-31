import React from 'react'
import "./Contact.css";
import { Fade, Zoom } from 'react-reveal';


const Contact = () => {
  return (
    <div className='Contact' id="contact">
        <div className='Contact-img' />
        <Zoom bottom cascade>
            <h2>Get Connected </h2>
            <h1>Follow Us </h1>
            <p>Get connected with us on social media</p>
        </Zoom>
        <div className='media'>
            <Zoom bottom >

            <div className='one-item'>
                <a href='https://www.facebook.com/dataverse1.0' target='_blanck'><i className='fa fa-solid fa-facebook'></i></a>
                
                <p className='soc'>Facebook</p>
                <p className='advice'>Be Our Friend</p>
            </div>
            <div className='one-item'>
                <a href='https://www.instagram.com/data.verse2.0/' target='_blank'>
                    <i className='fa fa-solid fa-instagram'></i>
                </a>
                <p className='soc'>Instagram</p>
                <p className='advice'>Connect with Us </p>
            </div>
            <div className='one-item'>
                <a href='https://www.linkedin.com/company/dataverse1/' target='_blank'>
                    <i className='fa fa-solid fa-linkedin'></i>
                </a>
                <p className='soc'>Linkedin</p>
                <p className='advice'>See Our Pictures</p>
            </div>
            <div className='one-item'>
                <a href=''>
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <p className='soc'>Email</p>
                <p className='advice'>Contact Us</p>
            </div>
            </Zoom>
        </div>

    </div>
  )
}

export default Contact