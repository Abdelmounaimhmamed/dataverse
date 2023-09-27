
import React, { useEffect, useState } from 'react'
import "./hero.css"
import {Zoom  }  from "react-reveal";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setRenderComponent(true);
      }, 1500); 
  
      return () => {
        clearTimeout(timer); 
      };
    }, []);

    return (
    <div className='Hero' id="hero-section">
        <div className='opac-time' />
        <img src="data.jpeg" className='image' alt=''  />
        {renderComponent && (
            <div className='social-hero-section'>
                <Zoom left cascade duration={1000}>
                    <div className='social-hero-display'>
                            <a href='' className='social-item-hero'><i className='fa fa-solid fa-instagram'></i></a>
                            <a href='' className='social-item-hero'><i className='fa fa-solid fa-envelope'></i></a>
                            <a href='' className='social-item-hero'><i className='fa fa-solid fa-linkedin'></i></a>
                            <a href='' className='social-item-hero'><i className='fa fa-solid fa-facebook'></i></a>
                    </div>
                </Zoom>
            </div>
        )}
        <Zoom bottom left>
            <div className="component">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='capitalized'  id="typewriter">
                        <Typewriter  
                            className="capitalized-text"
                            options={{
                                strings: [' Data Science Et Digitalisation : ','Une Nouvelle Ére' ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                   </h1>
                   <a href='#about' className='click-me'> See more </a>
                </div>
            </div>
        </Zoom>
    </div>
  ) 
}

export default Hero