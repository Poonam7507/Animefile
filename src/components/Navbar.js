import React from 'react';
import '../css/Stylenav.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function Navbar() {
    gsap.to(".navbar_frame",{
        scrollTrigger:{
            
            trigger:".navbar_frame",
            toggleClass:".classtoggler",
                  toggleActions:"restart pause play complete",      
           markers:true,
           
            
        }
    })
  return (
    <div className='navbar_frame'>
    
    <ul className='Logo'>
        <h1 className='logo'>WIZworld</h1>
    </ul>
    <div className='nav_component'>
       
        <li>HOME</li>
        <li>ABOUT</li>
        <li>kkm</li>
    </div>
    </div>
  )
}
