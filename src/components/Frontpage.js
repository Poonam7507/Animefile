import React from 'react'
import '../css/Stylefront.css'
import img1 from '../assets/images/hogwart.jpg'
import img2 from '../assets/images/wand.gif'
import Typewriter from "typewriter-effect";



export default function Frontpage() {
 
  
  return (
    <div>
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
    </div>
  )
}
