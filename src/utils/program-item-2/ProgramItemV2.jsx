import React from 'react'
import { Zoom } from 'react-reveal'

const ProgramItemV2 = () => {
  return (
    <div className='prog-day-1'>
    <h1> Day-2 </h1>
    <h1> 22/11/2023 </h1>
    <div className='holder'>
    <Zoom bottom cascade duration={1200}>
    <div className='sub-holder'>
            <div className="class-box">
                <h3>8:30 - 9:00</h3>
                <p>Accueil des invites </p>
            </div>
            <div className="class-box">
                <h3>9:00 - 9:45</h3>
                <p>Conference: Mr.BOUANINI Yasin  —Docteur en science de l'informatique</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>9:50 - 10:25</h3>
                <p>Presentation I: Entreprise Oracle</p>
            </div>
            <div className="class-box">
                <h3>10:30 - 10:55</h3>
                <p>Pause cafe</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>11:00 - 11:45</h3>
                <p>Presentation II: Entreprise Akkodis  —Directeur de l'entreprise</p>
            </div>
            <div className="class-box">
                <h3>11:50 - 12:35</h3>
                <p>Presentation III: Entreprise Apebi</p>
            </div>
        </div><div className='sub-holder'>
            <div className="class-box">
                <h3>12:35 - 14:00</h3>
                <p>Pause dejeuner</p>
            </div>
            <div className="class-box">
                <h3>14:00 - 15:00</h3>
                <p>Table ronde</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>15:05 - 16:20</h3>
                <p>Session partage d'experience</p>
            </div>
            <div className="class-box">
                <h3>16:25 - 17:50</h3>
                <p>Presentation des 5 finalistes de la competition</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>18:00 - XX:XX</h3>
                <p>Cloture et remise des prix</p>
            </div>
        
        </div>
       
            </Zoom>
    </div>
</div>

)
}

export default ProgramItemV2