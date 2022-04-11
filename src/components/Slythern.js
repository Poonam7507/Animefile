import React from 'react'
import { useEffect } from 'react';

import Footer from './Footer'
import Navbar from './Navbar'
import img1 from '../assets/images/draco.jpg'
import img2 from '../assets/images/crabbe.jpg'
import img3 from '../assets/images/tomriddle.jpg'
import img4 from '../assets/images/bellatrix.jpg'
import img5 from '../assets/images/goyle.jpg'
import flag from '../assets/images/sflag.jpg'
import room from '../assets/images/sroom.webp'
import '../css/Hoghouse.css'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Slythern() {
  useEffect(() => {
   gsap.from(".members  h1 span",{
      delay:.5,
      skewX:-50,
      skewY:20,
      stagger:.4,
      y:50,
      x:-20,
      opacity:0,
      repeat:-1,
      
    })
    gsap.timeline()


.from(" .grp1 img",{
      rotate:180,
      scale:2,
      duration:0.8,
      y:"1.5vw",
      opacity:0,
     
     
    })
    .from(" .grp1 h2",{
      x:"30vw",
      
      ease:"elastic",
      opacity:0,
      duration:1,
     
    })
  .from(" .grp2 img",{
      rotate:180,
      scale:2,
      duration:0.8,
      y:"1.5vw",
      opacity:0,
      scrollTrigger:{
        trigger:"grp2 ",
        scrub:true,
      },
      stagger:{
        amount:5
      }
    })
    
  
   .from(" .grp2 h2",{
       x:"30vw",
       
       ease:"elastic",
       opacity:0,
       duration:3,
       scrollTrigger:{
        trigger:"grp2 ",
        scrub:true,
      },
      stagger:{
        amount:7
      }
     })
    
   
       
     
  }, [])
  
  return (
    <div className='Hhouse'>
        <Navbar/>
        <div className='members'>
        
    <h1><span>Members</span><span>Of</span><span>The</span><span>House</span></h1>

        <div className="team grp1">
         <img src={img1} alt=" "/>
         <h2>Malfoy</h2>

         </div>
         <div className="team grp2" >
         <img src={img2} alt=" "/>
         <h2>Crabbe</h2>


         </div>
         <div className="team grp2">
         <img src={img3} alt=" "/>
         <h2>Tom Riddle</h2>


         </div>
         <div className="team grp2">
         <img src={img4} alt=" "/>
         <h2>Bellatrix</h2>


         </div>
         <div className="team grp2">
         <img src={img5} alt=" "/>
         <h2>Goyle</h2>
         

         </div>
         <div className="team grp2">
         <img src={flag} alt=" "/>
          <h2>Slythern Flag</h2>
         </div>
    <div className="team grp2">
         <img src={room} alt=" "/>
          <h2>Common Room</h2>
         </div>
        </div>
        <Footer/>
    </div>
  )
}
