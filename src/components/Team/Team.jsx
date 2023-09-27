import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import "./Team.style.css";
import { Zoom } from 'react-reveal';

const MyComponent = () => {

    const data = [
        {id: 2 , role : "President" , name: "Reda Agbalou" , img: "leda.jpeg"},
        {id: 3 , role : "Vice President" , name: "Saad Fettah" , img: "saad.jpeg"},
        {id: 4 , role : "Cellule Competition" , name: "Abdelmounaim hmamed" , img: "abdelmounaim.jpeg"},
        {id: 5 , role : "Vice Cellule Competition" , name: "Salma Faraj" , img: "salma.jpeg"},
        {id: 6 , role : "Cellule Logistique" , name: "Oussama hassnaoui " , img: "oussama.jpeg"},
        {id: 7 , role : "Cellule Relation Public" , name: "Houda Boutankhar" , img: "houda.jpeg"},
        {id: 8 , role : "Cellule Media" , name: "Oumaima karkaba" , img: "oumaima.jpeg"},
        {id: 9 , role : "Cellule Technique" , name: "Marouane Boufarouj" , img: "marouane.jpeg"},
        {id: 10 , role : "Cellule Relation Public" , name: "Nisserin Redallah" , img: "nisserine.jpeg"},
        {id: 11 , role : "Cellule Relation Public" , name: "salma benaroub" , img: "marouane.jpeg"},
        {id: 12 , role : "Cellule Relation Public" , name: "khadija Assag" , img: "khadija.jpeg"},
        {id: 13 , role : "Cellule Relation Public" , name: "Zineb raoui" , img: "zineb.jpeg"},
        {id: 14 , role : "President" , name: "Reda Agbalou" , img: "leda.jpeg"},

    ];
 
  return (
    <div className='team' >
      <h1>Our Team</h1>
      <p>"If I have seen further, it is by standing on the shoulders of giants." <span className='zalim'>– Isaac Newton</span></p>
      <ScrollCarousel
        autoplay={true}
        autoplaySpeed={10}
        speed={5}
        smartSpeed={true}
        onReady={() => console.log('I am ready')}
      >
        {/* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] */}
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
    </div>
  );
};

export default MyComponent;