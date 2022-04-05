import React from 'react';
import '../css/Stylenav.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function Navbar() {
    gsap.to(".navbar_frame",{
        scrollTrigger:{
            
            trigger:".navbar_frame",
            // markers:true,
            toggleClass:"classtoggler",
            // start:"top",
            // toggleClass:".classtoggler",
                  // toggleActions:"restart pause play complete",      
           
            
        }
    })
  return (
    <div className='navbar_frame'>
    
    <ul className='Logo'>
        <h1 className='logo'>WIZworld</h1>
    </ul>
    <div className='nav_component'>
       
   
        <li> <Link to="/">
        <a href="./Home" > Home </a>
        </Link>
        </li>
        <li> <Link to="/character">
        <a href="./Character" >Characters </a>
        </Link>
        </li>
        <li> <Link to="/about">
        <a href="./About" > Sorting Hat </a>
        </Link>
        </li>
        <li> <Link to="/contact">
        <a href="./Contact" > Contact </a>
        </Link>
        </li>
        
    </div>
    </div>
  )
}
