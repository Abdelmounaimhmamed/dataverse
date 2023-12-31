import React, { useEffect, useState } from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import "./Team.style.css";
import { Zoom } from 'react-reveal';

const MyComponent = () => {
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderComponent(true);
    }, 2500); 

    return () => {
      clearTimeout(timer); 
    };
  }, []);

    const data = [
        {id: 2 , role : "President" , name: "Reda Agbalou" , img: "reda.jpeg"},
        {id: 3 , role : "Vice President" , name: "Saad Fettah" , img: "saad.jpeg"},
        {id: 4 , role : "Cellule Competition" , name: "Abdelmounaim Hmamed" , img: "abdelmounaim.jpeg"},
        {id: 5 , role : "Vice Cellule Competition" , name: "Salma Faraj" , img: "salma.jpeg"},
        {id: 6 , role : "Cellule Logistique" , name: "Oussama Hassnaoui " , img: "oussama.jpeg"},
        {id: 7 , role : "Cellule Relation Public" , name: "Houda Boutankhar" , img: "houda.jpeg"},
        {id: 8 , role : "Cellule Media" , name: "Oumaima Karkba" , img: "oumaima.jpeg"},
        {id: 9 , role : "Cellule Technique" , name: "Marouane Boufarouj" , img: "marouane.jpg"},
        {id: 10 , role : "Cellule Sponsoring" , name: "Nissrine RIDALLAH" , img: "nisserine.jpeg"},
        {id: 11 , role : "Cellule Sponsoring" , name: "Salma Benaroub" , img: "benaroub.jpeg"},
        {id: 12 , role : "Cellule Divertissment" , name: "khadija Assag" , img: "khadija.jpeg"},
        {id: 13 , role : "Cellule Exposition" , name: "Zainab Raoui" , img: "zineb.png"},
        {id: 14 , role : "President" , name: "Reda Agbalou" , img: "reda.jpeg"},
        {id: 15 , role : "Parrain" , name: "Mouna Guerrab" , img: "mouna.jpeg"},
    ];
 
  return (
    <div className='team' id="team">
      <h1>Our Team</h1>
      <p className='team-title'>"If I have seen further, it is by standing on the shoulders of giants." <span className='zalim'>– Isaac Newton</span></p>
      {renderComponent ? (

      <ScrollCarousel
        autoplay={true}
        autoplaySpeed={10}
        speed={5}
        smartSpeed={true}
        onReady={() => console.log('')}
      >
        
        <Zoom bottom >
            {data.map((item) => (
            <div key={item.id} className='item' >
              <div className='contenair' >
                  <img src={item.img}  alt='' className='image-team'  />
              </div>
                <div className='data'>
                    <span className='parag-1 parag-2'>{item.role}</span> 
                    
                    <h3 className='title-name'>{item.name}</h3>
                    <span className='parag-3 parag-4'>Data and Software Engineering Student at ENSA Khouribga.</span>
                </div>
              
            </div>
            ))}
        </Zoom>
      </ScrollCarousel>
      ) : ''}
    </div>
  );
};

export default MyComponent;