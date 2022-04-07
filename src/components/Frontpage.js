import React from 'react'
import { useEffect,useRef } from 'react';
import '../css/Stylefront.css'
import img1 from '../assets/images/hogwart.jpg'
import img2 from '../assets/images/wand.gif'
import Typewriter from "typewriter-effect";
import gryffindor from '../assets/images/gryffindor.gif';
import slythern from '../assets/images/slythern.gif';
import hufflepuff from '../assets/images/hufflepuff.gif';
import revenclaw from '../assets/images/ravenclaw.gif';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// import Character from './Characters'




export default function Frontpage() {
  useEffect(() => {
  const t1=gsap.timeline();
  t1.from(".gryffindor",
  { 
xPercent:-100,
scrollTrigger:{
      trigger:".gryffindor",
      scrub:true,
  //     // pin:true,
      markers:true

    }
    });
  t1.from(".slythern",
  { 
xPercent:100,
scrollTrigger:{
  trigger:".slythern",
  scrub:true,
//     // pin:true,
  markers:true

}
    });
  t1.from(".hufflepuff",
  { 
xPercent:-100,
scrollTrigger:{
  trigger:".hufflepuff",
  scrub:true,
//     // pin:true,
  markers:true

}
    });
  t1.from(".ravenclaw",
  { 
xPercent:100,
scrollTrigger:{
  trigger:".ravenclaw",
  scrub:true,
//     // pin:true,
  markers:true

}
    });
     
   
  
   
  }, [])
  
 function func(){
{/* <a href='./Characters'/> */}
   const p=prompt("Please enter passcode: (you can get it by sorting hat quiz)");
  {if(p===null || p==="")
{
  // return <a href='./character'/>
  alert("cancel");
}
// else if(p==="poonam"){
// }
} 
 }
  
  return (
    <div className='frontpage'>
    <ul>
        <li>
            <div className='font'>
           <Typewriter
             onInit={(props)=>{
               props
               .typeString(" Welcome To the World Of Magic")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Hogwarts-The Comic World")
                .start();
             }}
           />
                {/* Welcome To the World Of Magic */}
            </div>
        </li>
        {/* <li> */}
        <img src={img2} className="img img2" style={{width:"20vw"}}/>
        
        {/* </li> */}
        {/* <li> */}
        <img src={img1} className="img img1" style={{width:"21vw"}}/>
        
        {/* </li> */}
      
       
    </ul>
    <div className='house'>
       <h1 className='hname'>Our Houses</h1>
      <div className='gryffindor housename'>
        <img src={gryffindor} alt=""/>
       
        <button onClick={func}>
          open
{/* <a href='./character'> Open The Door</a> */}

        </button>
      </div>
      <div className='slythern housename'>
      <img src={slythern} alt=""/>

      </div>
      <div className='hufflepuff housename'>
      <img src={hufflepuff} alt=""/>

      </div>
      <div className='ravenclaw housename'>
      <img src={revenclaw} alt=""/>

      </div>
    </div>
    </div>
  )
}
