import React from 'react'
import { Zoom } from 'react-reveal';
import './about.style.css'
import Box from '../../utils/box-holder/box';

const About = () => {
  const data = [
    {id: 1 , icon: "fa-solid fa-paperclip", title: "Creating Contact",subOne: "Grow your community",paragraph: "Meeting people in the data science and big data field. and networking and discovering what is new in this field"},
    {id: 2 , icon: "fa-solid fa-layer-group", title: "Collaborations",subOne: "Great community ",paragraph: "Open in making collaborations with leader companies in Data. Also with domain leadership.    "},
    {id: 3 , icon: "fa-solid fa-puzzle-piece", title: "Offering opportunities",subOne: "With our partnerships  ",paragraph: "With our Collaborations and partnerships we offer to our student, PFA/PFE Training opportunities and job Offers as well.    "},
    {id: 4 , icon: "fa-solid fa-trophy", title: "Learning and Competing",subOne: "Grow your community",paragraph: "Learning, achieving, competing and demonstrating skills on real-world problems    "}
  ]
  return (
    <div className='about-section d-flex flex-column justify-content-center align-items-center'>
        <Zoom bottom    >
          {/* something you need */}
            <h1 className=''>Who are we? </h1>
            <p className='parag'>We foster student connections, cultivate their community, and bridge them to the world of Data, enabling collaborations and providing opportunities.</p> 
        </Zoom>

        <div className='box-components d-flex flex-row justify-content-center align-items-center flex-wrap'>
          <Zoom bottom  duration={1500} >
            <Box items={data[0]} />       
            <Box items={data[1]} />       
            <Box items={data[2]} />       
            <Box items={data[3]} />       
          </Zoom>
        </div>
        
        
    </div>
  )
}

export default About;