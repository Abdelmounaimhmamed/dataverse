import React from 'react'
import Navbar from '../navBar/Navbar';
import "./event-prog.css";
import { Zoom } from 'react-reveal';
import ProgramItem from '../../utils/program-item/programItem';
import ProgramItemV2 from '../../utils/program-item-2/ProgramItemV2';

const EventProg = () => {
    const data  = [
        {id: 1 , time: "8:30 - 9:00" , subject : "Accueil des invites"},
        {id: 2 , time: "8:31 - 9:00" , subject : "Accueil des invites"},
        {id: 3 , time: "8:31 - 9:00" , subject : "Accueil des invites"},
    ]
  return (
    <>
      <Navbar />
      <div className=''>
          {/* <Navbar /> */}
          <img className='image-2' src='data.jpeg' alt=''/>
          <ProgramItem />
          <ProgramItemV2 />
      </div>
  
    </>
  )
}

export default EventProg;