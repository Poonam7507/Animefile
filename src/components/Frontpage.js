import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Stylefront.css'
import img1 from '../assets/images/hogwart.jpg'
import img2 from '../assets/images/wand.gif'
import Typewriter from "typewriter-effect";
import gryffindor from '../assets/images/gryffindor.gif';
import slythern from '../assets/images/slythern.gif';
import hufflepuff from '../assets/images/hufflepuff.gif';
import revenclaw from '../assets/images/ravenclaw.gif';
import g from './Gryffindor';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// import Character from './Characters'




export default function Frontpage() {
  const [show, setShow] = useState(false);
  useEffect(() => {
  const t1=gsap.timeline();
  t1.from(".gryffindor",
  { 
xPercent:-100,
scrollTrigger:{
      trigger:".gryffindor",
      scrub:true,
  //     // pin:true,
      // markers:true

    }
    });
  t1.from(".slythern",
  { 
xPercent:100,

scrollTrigger:{
  trigger:".slythern",
  scrub:true,
//     // pin:true,
  // markers:true

}
    });
  t1.from(".hufflepuff",
  { 
xPercent:-100,

scrollTrigger:{
  trigger:".hufflepuff",
  scrub:true,
//     // pin:true,
  // markers:true

}
    });
  t1.from(".ravenclaw",
  { 
xPercent:100,

scrollTrigger:{
  trigger:".ravenclaw",
  scrub:true,
//     // pin:true,
  // markers:true

}
    });
     
   
  
   
  }, [])
  
 function func(){
   const p=prompt("Please enter passcode: (you can get it by sorting hat quiz)");
  {if(p===null || p==="")
{
  // return <a href='./character'/>
  alert("Can't take you inside the door");
}
else if(p==="poonam"){
  setShow(true);
  alert("Click on welcome button")
}
else {
  alert("Wrong Passkey")
}

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
      <h3 className='text'>
       Gryffindor

      </h3>
        <img src={gryffindor} alt=""/>
        <button className='btn' style={{display:show?"none" : "block"}}  onClick={func}>
      <h3 >

      open
      </h3>  
       
        </button>
        <Link to="/ghouse">
  <a href='./Gryffindor'>
        <button className='btn'  style={{display:show?"block" : "none"}}>
  <h3>
  Welcome
  </h3>
        </button>
  </a> </Link>
      </div>

      <div className='slythern housename'>
      <h3 className='text'>
       Slythern

      </h3>
      <img src={slythern} alt=""/>
      <button className='btn'  onClick={func}>
      <h3 style={{display:show?"none" : "block"}}>

      open
      </h3>  
       
        </button>
        <button className='btn'>
        <Link to="/shouse">
  <a href='./Slythern'>
  <h3 style={{display:show?"block" : "none"}}>
  Welcome
  </h3></a> </Link>
        </button>
      </div>
      <div className='hufflepuff housename'>
      <h3 className='text'>
      Hufflepuff

      </h3>
      <img src={hufflepuff} alt=""/>
      <button className='btn'  onClick={func}>
      <h3 style={{display:show?"none" : "block"}}>

      open
      </h3>  
       
        </button>
        <button className='btn'>
        <Link to="/hhouse">
  <a href='./Hufflepuff'>
  <h3 style={{display:show?"block" : "none"}}>
  Welcome
  </h3></a> </Link>
        </button>

      </div>
      <div className='ravenclaw housename'>
      <h3 className='text'>
     Ravenclaw

      </h3>
      <img src={revenclaw} alt=""/>
      <button className='btn'  onClick={func}>
      <h3 style={{display:show?"none" : "block"}}>

      open
      </h3>  
       
        </button>
        <button className='btn'>
        <Link to="/rhouse">
  <a href='./Ravenclaw'>
  <h3 style={{display:show?"block" : "none"}}>
  Welcome
  </h3></a> </Link>
        </button>
      </div>
    </div>
    </div>
  )
}
