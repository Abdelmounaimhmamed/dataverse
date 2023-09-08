

import React from 'react'
import "./Footer.css"
import { Zoom } from 'react-reveal'


const Footer = () => {

  return (
    <div className='Footer'>
      <Zoom>
          <div className='part-1'>
            <img  src='Logo.png'  className='styling'/>
          </div>

          <div className=' social-1'>
              <i className="icona-1 m-2 p-4 fa fa-solid fa-facebook"></i>
              <i className="icona-1 m-2 p-4 fa fa-solid fa-instagram"></i>
              <i className="icona-1 m-2 p-4 fa fa-solid fa-linkedin"></i>
              <i className="icona-1 m-2 p-4 fa fa-solid fa-envelope"></i>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
              <p className='fs-5 mt-3'>© Dataverse 2.0 2023 Corp. Inc</p>
              <a href=''  className="text-white text-decoration-none fs-5 " className="custumize">Made with love . by @abdelmounaim_hmamed</a>
          </div>
      </Zoom>
    </div>
  )
}

export default Footer