import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Stylefront.css'
import img1 from '../assets/images/hogwart.jpg'
import img2 from '../assets/images/wand.gif'
import liveimg1 from '../assets/images/liveimg1.jpg'
import liveimg2 from '../assets/images/liveimg2.jpg'
import liveimg3 from '../assets/images/liveimg3.jpg'
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
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  useEffect(() => {
  const t1=gsap.timeline();
  t1.from(".moon",{
    x:"2vw",
    y:"9vw",
    scale:1.3,
    ease:"power1",
    // repeat:-1,
    // repeatDelay:4
  })
  .fromTo(".owl",{
    duration:1.5,
    // repeat:-1,
    yoyo:true,
    scale:2
    
  }
  ,{
    x:"-25vw",
    y:"-7vh",
    scale:"0.9",

  })
  .to(".building",{
    scale:1,
    x:"5vw",
  //  ease:'elastic(1,0,5)',
    
    // x:"6vw",
    duration:0.5,
    // repeat:-1,
    // repeatDelay:1.5

  })

  // ScrollTrigger.create({
  //   animation:t1,
  //   trigger:".parallex",
  //   scrub:true
  // })
  t1.from(".gryffindor",
  { 
xPercent:-100,
scrollTrigger:{
  start:"center",
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
else if(p==="g"){
  setShow1(true);
  alert("Click on welcome button")
}
else if(p==="s"){
  setShow2(true);
  alert("Click on welcome button")
}
else if(p==="h"){
  setShow3(true);
  alert("Click on welcome button")
}
else if(p==="r"){
  setShow4(true);
  alert("Click on welcome button")
}
else {
  alert("Wrong Passkey")
}

} 
 }
 
  
  return (
    <div className='frontpage'>
    <section className='parallex'>
<img src={liveimg3} className="moon" alt=" "/>
<img src={liveimg2} className="building" alt=" "/>
<img src={liveimg1} className="owl" alt=" "/>
{/* <img src={liveimg3} className="owl" alt=" "/> */}
    </section>
    <ul>
        <li>
            <div className='font'>
           <Typewriter
           options={{
             loop:true,
           }}
             onInit={(props)=>{
              
               props
               .typeString(" Welcome To the World Of Magic")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Hogwarts-The Magic Home")
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
        <button className='btn' style={{display:show1?"none" : "block"}}  onClick={func}>
      <h3 >

      open
      </h3>  
       
        </button>
        <Link to="/ghouse">
  <a href='./Gryffindor'>
        <button className='btn'  style={{display:show1?"block" : "none"}}>
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
      <button className='btn'  style={{display:show2?"none" : "block"}} onClick={func}>
      <h3 >

      open
      </h3>  
       
        </button>
        <Link to="/shouse">
        <button className='btn' style={{display:show2?"block" : "none"}}>
  <a href='./Slythern'>
  <h3 >
  Welcome
  </h3></a> 
        </button>
  </Link>
      </div>
      <div className='hufflepuff housename'>
      <h3 className='text'>
      Hufflepuff

      </h3>
      <img src={hufflepuff} alt=""/>
      <button className='btn' style={{display:show3?"none" : "block"}}  onClick={func}>
      <h3 >

      open
      </h3>  
       
        </button>
        <Link to="/hhouse">
        <button className='btn' style={{display:show3?"block" : "none"}}>
  <a href='./Hufflepuff'>
  <h3 >
  Welcome
  </h3></a> 
        </button>
  </Link>

      </div>
      <div className='ravenclaw housename'>
      <h3 className='text'>
     Ravenclaw

      </h3>
      <img src={revenclaw} alt=""/>
      <button className='btn' style={{display:show4?"none" : "block"}} onClick={func}>
      <h3 >

      open
      </h3>  
       
        </button>
        <Link to="/rhouse">
        <button className='btn' style={{display:show4?"block" : "none"}}>
  <a href='./Ravenclaw'>
  <h3 >
  Welcome
  </h3></a> 
        </button>
  </Link>
      </div>
    </div>
    </div>
  )
}
