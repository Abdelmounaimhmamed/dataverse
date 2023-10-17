import React, { useEffect, useState } from 'react'
import "./NavBar.style.css";
import { Fade, Zoom } from 'react-reveal';


const Navbar = () => {
    const [state , setState] = useState(true);
    const [isFixed, setFixed] = useState(false); 

    useEffect(() => {
        const  handleScroll = () =>  {
        const heroSectionEl = document.getElementById('hero-section');
        const heroSectionRect = heroSectionEl.getBoundingClientRect();
        const heroSectionBottom = heroSectionRect.bottom;

        if (window.pageYOffset >= heroSectionBottom) {
            setFixed(true);  
        }
        if(window.pageYOffset <= heroSectionBottom){
            setFixed(false); 
        }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClick = () => {
        setState(!state);
    }
   
  return (
    <>
        <div className={`Navbar ${isFixed ? 'change-color' : ''}`}>
            <div className=''>
                <Zoom>
                    <img  src={`${isFixed ?  '	https://ensak.usms.ac.ma/dataverse/LogoFixed.png' : 'https://ensak.usms.ac.ma/dataverse/Logo.png'}`}  className='styling' alt=''/>
                    {/* <h1 className='fs-4'>DataVerse</h1> */}
                </Zoom>
            </div>
            <Fade top cascade>
                <ul className='items'>
                    <li><a href="/dataverse">Acceuil</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="/dataverse/eventProgram">Event Program</a></li>
                    <li className='toHoverOn'>
                        <a href='' className='isEdition'>Editions</a>
                        <div className='composite'>
                            <div className='editions'>
                                <a href='index'>Dataverse1.0</a><br/>
                                <a href='index'>Dataverse2.0</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {state === true ? ( <i className="fa-solid fa-bars fa-vars" onClick={handleClick}></i>) : ( <i className="fa-solid fa-xmark fa-vars" onClick={handleClick}></i>)}
            </Fade>
        </div>
        { state === false && (
            <div className='showed-sm'>
            <Zoom bottom cascade>
                <ul className='items-v2'>
                        <li><a href="/dataverse">Acceuil</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/dataverse/eventProgram">Event Program</a></li>
                        <li><a href="contact">Contact</a></li>
                </ul>
            </Zoom>
        </div>
        )}
        
    </>
  )
}

export default Navbar