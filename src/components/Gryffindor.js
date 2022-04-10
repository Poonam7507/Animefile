import React from 'react';
import { useEffect } from 'react';
import '../css/ghouse.css'
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from '../assets/images/harry.jpg'
import img2 from '../assets/images/ron.jpg';
import img3 from '../assets/images/hermoine.jpg'
import img4 from '../assets/images/neville.jpg'
import img5 from '../assets/images/ginny.jpg'
import img6 from '../assets/images/fred.jpg'
import img7 from '../assets/images/george.jpg'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Gryffindor() {
  useEffect(() => {
   gsap.from(".members  h1 span",{
      delay:.5,
      skewX:-50,
      skewY:20,
      stagger:.4,
      y:50,
      x:-20,
      opacity:0,
      // repeat:-1,
      
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
    <div className='ghouse'>
    <Navbar/>
    <div className='members'>
    <h1><span>Members</span><span>Of</span><span>The</span><span>House</span></h1>
    <div className="team grp1">
         <img src={img1} alt=" "/>
          <h2>HarryPotter</h2>
         </div>
         <div className="team grp2">
         <img src={img2} alt=" "/>
         <h2>Ronald Weasley</h2>


         </div>
         <div className="team grp2">
         <img src={img3} alt=" "/>
         <h2>Harmoine Granger</h2>


         </div>
         <div className="team grp2">
         <img src={img4} width="250vw" height="300vw" alt=" "/>
         <h2>Neville Longbottom</h2>

         </div>
         <div className="team grp2">
         <img src={img5} alt=" "/>
         <h2>Ginny Weasley</h2>


         </div>
         <div className="team grp2">
         <img src={img6} alt=" "/>
         <h2>Fred Weasley</h2>
         

         </div>
         <div className="team grp2">
         <img src={img7} alt=" "/>
         <h2>George Weasley</h2>


         </div>
    </div>
       
         <Footer/>
    </div>
  )
}
