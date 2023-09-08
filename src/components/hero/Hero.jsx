
import React from 'react'
import "./hero.css"
import {Zoom  }  from "react-reveal";
import Typewriter from 'typewriter-effect';

const Hero = () => {

    return (
    <div className='Hero' id="hero-section">
        <div className='opac-time' />
        <img src="data.jpeg" className='image' alt=''  />
        <Zoom bottom left>
            <div className="component">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='capitalized'  id="typewriter">
                        <Typewriter  
                            className="capitalized-text"
                            options={{
                                strings: ['Data Science Et Digitalisation : <br/> Une Nouvelle Ére ' ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                   </h1>
                   <a href='' className='click-me'> See more </a>
                </div>
            </div>
        </Zoom>
    </div>
  ) 
}

export default Hero