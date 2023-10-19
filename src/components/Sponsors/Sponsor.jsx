import React from 'react'
import "./Sponsor.css";
import { Zoom } from 'react-reveal';

const Sponsor = () => {
    const data = [
        {id : 1 , img : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/768px-Oracle_logo.svg.png"},
        {id : 2 , img : "https://www.cirane.com/wp-content/uploads/2017/10/ibm-logo-png-transparent-background-300x150.png"},
        {id : 3 , img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/663px-Pepsi_logo_2014.svg.png"},
        {id : 4 , img : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/900px-Cih-bank.png"},   
    ]


  return (
    <div className='Sponsor'>
        <Zoom bottom cascade duration={1200}>
            {data.map(item => (
                <div className='some-data' key={item.id}>
                        <img src={item.img} className='some-image-data'  alt='image'/>
                </div>
            ))}
        </Zoom>
    </div>
  )
}

export default Sponsor