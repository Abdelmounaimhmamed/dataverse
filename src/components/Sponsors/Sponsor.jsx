import React from 'react'
import "./Sponsor.css";
import { Zoom } from 'react-reveal';

const Sponsor = () => {
    const data = [
        {id : 1 , img : "https://dataverse-event.tech/img/clients/usms.png"},
        {id : 2 , img : "https://dataverse-event.tech/img/clients/ensa.png"},
        {id : 3 , img : "https://dataverse-event.tech/img/clients/oracle.png"},
        {id : 4 , img : "https://dataverse-event.tech/img/clients/jeo.png"},
        {id : 5 , img : "https://dataverse-event.tech/img/clients/skills.png"},]


  return (
    <div className='Sponsor'>
        <Zoom bottom cascade duration={1200}>
            {data.map(item => (
                <div className='' key={item.id}>
                        <img src={item.img}  alt='image'/>
                </div>
            ))}
        </Zoom>
    </div>
  )
}

export default Sponsor