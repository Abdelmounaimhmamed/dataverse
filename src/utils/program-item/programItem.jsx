
import React from 'react'
import { Zoom } from 'react-reveal'

const ProgramItem = () => {
  return (
    <div className='prog-day-1'>
    <h1> Day 1 </h1>
    <h3 style={{ fontSize: "20px"}}>21/11/2023</h3>
    <div className='holder'>
    <Zoom bottom cascade duration={1200}>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>8:30 - 9:00</h3>
                <p>Accueil des invites </p>
            </div>
            <div className="class-box">
                <h3>9:00 - 9:45</h3>
                <p>Mots d'overture de l'evenment</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>9:50 - 10:25</h3>
                <p>Keynote d'overture: Mr.Houssine Oucouc -Directeurd' Oracle</p>
            </div>
            <div className="class-box">
                <h3>10:30 - 10:55</h3>
                <p>Pause cafe</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>11:00 - 11:45</h3>
                <p>Conference: Mr.Mourad Elbaz  —Representant de l'entreprise Skills</p>
            </div>
            <div className="class-box">
                <h3>11:50 - 12:05</h3>
                <p>VisioConference/Lancement de competition: Mr Hamza Khalfi  —Trustii.io</p>
            </div>
        </div><div className='sub-holder'>
            <div className="class-box">
                <h3>12:05 - 12:50</h3>
                <p>Conference: Mr. Mohammed Daghouri  —Consultant en Strategie Digitale</p>
            </div>
            <div className="class-box">
                <h3>12:50 - 14:00</h3>
                <p>Pause dejeuner</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>14:05 - 14:45</h3>
                <p>Presentation I: Entreprise Atomes  —Mr. Mohammed Ghazdali</p>
            </div>
            <div className="class-box">
                <h3>14:50 - 15:30</h3>
                <p>Presentation II: Entreprise Tsunami IT  —Mr. TAOUALI Mohamed Laziz</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>15:35 - 16:05</h3>
                <p>Presentation III: Entreprise Altados</p>
            </div>
            <div className="class-box">
                <h3>16:10 - 17:00</h3>
                <p>Pause divertissement</p>
            </div>
        </div>
        <div className='sub-holder'>
            <div className="class-box">
                <h3>17:05 - 18:00</h3>
                <p>Cloture de la 1er journee et visite lieu de competition</p>
            </div>
            
        </div>
            </Zoom>
    </div>
</div>
  )
}

export default ProgramItem