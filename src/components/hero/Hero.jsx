
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
                            <a  href='https://www.instagram.com/data.verse2.0/' target='_blank' className='social-item-hero'><i className='fa fa-solid fa-instagram'></i></a>
                            <a  href='https://www.instagram.com/data.verse2.0/' target='_blank' className='social-item-hero'><i className='fa fa-solid fa-envelope'></i></a>
                            <a  href='https://www.linkedin.com/company/dataverse1/' target='_blank' className='social-item-hero'><i className='fa fa-solid fa-linkedin'></i></a>
                            <a  href='https://www.facebook.com/dataverse1.0' target='_blank' className='social-item-hero'><i className='fa fa-solid fa-facebook'></i></a>
                    </div>
                </Zoom>
            </div>
        )}
        <Zoom bottom left>
            <div className="component">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='agbalou-report'> Data Science Et Digitalisation</h1>
                    <p style={{fontSize:"30px" }}></p>
                    <h1 className='capitalized'  id="typewriter">
                        <Typewriter  
                            className="capitalized-text"
                            options={{
                                strings: [' Une Nouvelle Ére'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                   </h1>
                   <p className='parag-hero-sec'>Ensemble pour réunir les passionés du monde des données .</p>                   
                   <a href='#about' className='click-me'> See more </a>
                </div>
            </div>
        </Zoom>
    </div>
  ) 
}

export default Hero