import React from 'react';
import { useEffect } from 'react';
import '../css/Stylenav.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export default function Navbar() {
  useEffect(() => {
    
    gsap.timeline()
    .fromTo(".logo",{
      opacity:0,
    
    },{
      opacity:1,
   ease:'elastic(1,0,5)',

      x:25,
    })
    .fromTo(".comp",{
      opacity:0,
   ease:'elastic(1,0,5)',

    }
    ,{
      y:10,
      opacity:1,
      stagger:{
        amount:1,
      }
    })
      .to(".navbar_frame",{
          scrollTrigger:{
              
              trigger:".navbar_frame",
              // markers:true,
              toggleClass:"classtoggler",
              // start:"top",
              // toggleClass:".classtoggler",
                    // toggleActions:"restart pause play complete",      
             
              
          }
      })
   
  }, [])
  
 
  return (
    <div className='navbar_frame'>
    
    <ul className='Logo '>
        <h1 className='logo'>WIZworld</h1>
    </ul>
    <div className='nav_component'>
       
   
        <li className='comp'> <Link to="/">
        <a href="./Home" > Home </a>
        </Link>
        </li>
        <li className='comp'> <Link to="/character">
        <a href="./Character" >Characters </a>
        </Link>
        </li>
        <li className='comp'> <Link to="/about">
        <a href="./About" > Sorting Hat </a>
        </Link>
        </li>
        <li className='comp'> <Link to="/contact">
        <a href="./Contact" > Dumbledore Thoughts </a>
        </Link>
        </li>
        
    </div>
    </div>
  )
}
