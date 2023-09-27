import React  from 'react'
import "./Details.css";
import { Zoom } from 'react-reveal';
import video from "./video.mp4";


const Details = () => {

  return (
        <div className='Details'>

          <div className='opa' />
          <Zoom bottom cascade>
            <div className='classif'>
                <h1>Look Up</h1>
                <h3>First Edition preparation</h3>
                  <p>
                      Event organization demands responsibility, teamwork, communication, 
                      and strategic planning, yielding skill growth, self-esteem boost, new
                      connections, and cherished memories, making it a fulfilling and universal 
                      aspiration.
                  </p>
            </div>
          </Zoom>
            <div className=''>
                      <div class="video-container">
                        {/* <video width={"560"} height={"315"} src='video.mp4' autoPlay autoSave='true'>
                        </video> */}
                        {/* <video className="frame"  width="560" height="315"  controls >
                          <source src="video.mp4" type="video/mp4"></source>
                        </video> */}
                        {/* <video width="560" height="315"  controls autoplay className='frame'>
                            <source type="video/mp4" src={"https://develus.vercel.app/IT.mp4"} />
                        </video> */}
                          <iframe className='frame'  width="560" height="315" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7105616411288301568?compact=1" frameborder="0" allowfullscreen="" title="Post intégré"></iframe>  
                        {/* <iframe className='frame'  width="560" height="315" src="https://www.youtube.com/embed/DRTVAQZL_Ms?si=0q-UFpr5aaNEL1ep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                      </div>
                </div>
        </div>  




)}

export default Details

//
// 
// Organizing an event is a stressful challenge that requires a sense of responsibility, 
//                         rigor, global vision, team spirit, flexibility, excellent communication and strategic 
//                         planning. This is what we get out of this experience, we acquire many skills, we boosts 
//                         self-esteem, we develop team spirit, we meet new people , and the best of all is that we 
//                         create unforgettable, funny and special memories. Organizing an event is an experience to be
//                         lived to the fullest despite the constraints and obstacles, because a successful event is everyone's 
//                         wish and goal ! .