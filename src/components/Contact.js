import React from 'react';
import Navbar from './Navbar';
import '../css/dthought.css';
import th1 from '../assets/images/thoughts/1.webp';
import th2 from '../assets/images/thoughts/2.webp';
import th3 from '../assets/images/thoughts/3.jpg';
import th4 from '../assets/images/thoughts/4.jpg';
import th5 from '../assets/images/thoughts/5.webp';
import th6 from '../assets/images/thoughts/6.webp';
import th7 from '../assets/images/thoughts/7.jpg';
import th8 from '../assets/images/thoughts/8.png';
import th9 from '../assets/images/thoughts/9.webp';
import th10 from '../assets/images/thoughts/10.jpg';
import { useEffect } from 'react';

import {gsap} from 'gsap';




export default function Contact() {
  useEffect(() => {
    gsap.timeline()
    .from("t1",{
      opacity:0,
      
    })
    .to("t1",{
      x:500,

    })
  
    
  }, [])
  
  return (
    <div className='thoughtbox'>
        <Navbar/>
        <div className='thoughts t1'>
        <img src={th1} alt=""/>
     
        </div>
        <div className='thoughts'>
        <img src={th2} alt=""/>
     
        </div>
        <div className='thoughts'>
     <img src={th3} alt=""/>
        </div>
        <div className='thoughts'>
        <img src={th4} alt=""/>
     
        </div>
        <div className='thoughts'>
        <img src={th5} alt=""/>
     
        </div>
        <div className='thoughts'>
        <img src={th6} alt=""/>
     
        </div>
        <div className='thoughts'>
        <img src={th7} alt=""/>
     
        </div>
        <div className='thoughts'>
     <img src={th8} alt=""/>
      
        </div>
        <div className='thoughts'>
     <img src={th9} alt=""/>
      
        </div>
        <div className='thoughts'>
     <img src={th10} alt=""/>
      
        </div>
    </div>
  )
}
