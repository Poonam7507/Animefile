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
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger);




export default function Contact() {
  useEffect(() => {
    const arrColors=["mediumpurple","navy","royalblue","slateblue","cornflowerblue","dodgerblue","deepskyblue","lightskyblue","lightblue","powderblue"]
    gsap.set(".thoughts",{
  backgroundColor:gsap.utils.wrap(arrColors)
    })

    const ty=gsap.timeline()
    
    
    ty.to(".t1 img",{
   margin:"7%",
   marginBottom:"3%",
   x:"40vw",
   duration:2,
   skewX:"0.5vw",

   rotationY:360,

      
    
    
      scrollTrigger:{
        trigger:".t1",
        toggleActions:"play none play none",
        scrub:true

      }
     

      
    })


    ty.to(".t2 img",{

    margin:"7%",
    marginBottom:"3%",

    x:"40vw",
    duration:2,
    skewX:"0.5vw",

    rotationY:360,
    
    
      scrollTrigger:{
        trigger:".t2",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t3 img",{
    margin:"7%",
    marginBottom:"3%",

    x:"40vw",
    duration:2,
    skewX:"0.5vw",

    rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t3",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t4 img",{

    margin:"7%",
    marginBottom:"3%",
    x:"40vw",
    duration:2,
    skewX:"0.5vw",

    rotationY:360,
  
      scrollTrigger:{
        trigger:".t4",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t5 img",{
    

      margin:"7%",
      marginBottom:"3%",

      x:"40vw",
      duration:2,
      skewX:"0.5vw",

      rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t5",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t6 img",{
     


      margin:"7%",
      marginBottom:"3%",

      x:"40vw",
      duration:2,
      skewX:"0.5vw",

      rotationY:360,
  
      scrollTrigger:{
        trigger:".t6",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t7 img",{
     
      margin:"7%",
      marginBottom:"3%",
      x:"40vw",
      duration:2,
      skewX:"0.5vw",

      rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t7",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t8 img",{
      

      margin:"7%",
   marginBottom:"3%",

      x:"40vw",
      duration:2,
      skewX:"0.5vw",

      rotationY:360,
      
  
      scrollTrigger:{
        trigger:".t8",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t9 img",{
      margin:"7%",
      marginBottom:"3%",

      x:"40vw",
      duration:2,
      skewX:"0.5vw",

      rotationY:360,

      
   
      scrollTrigger:{
        trigger:".t9",
        toggleActions:"play none play none",

        scrub:true

      }
    })
    ty.to(".t10 img",{
      
      margin:"7%",
      marginBottom:"3%",

      x:"40vw",
      duration:2,
      skewX:"0.5vw",
      rotationX:360,

      
  
   
    })
  
    
  }, [])
  
  return (
    <div className='boxes'>
        <Navbar/>
    <div className='thoughtbox'>
        
        <div className='thoughts t1'>
        <img src={th1} alt=""/>
     
        </div>
        <div className='thoughts t2'>
        <img src={th2} alt=""/>
     
        </div>
        <div className='thoughts t3'>
     <img src={th3} alt=""/>
        </div>
        <div className='thoughts t4'>
        <img src={th4} alt=""/>
     
        </div>
        <div className='thoughts t5'>
        <img src={th5} alt=""/>
     
        </div>
        <div className='thoughts t6'>
        <img src={th6} alt=""/>
     
        </div>
        <div className='thoughts t7'>
        <img src={th7} alt=""/>
     
        </div>
        <div className='thoughts t8'>
     <img src={th8} alt=""/>
      
        </div>
        <div className='thoughts t9'>
     <img src={th9} alt=""/>
      
        </div>
        <div className='thoughts t10'>
     <img src={th10} alt=""/>
      
        </div>
    </div>
    <Footer/>
    </div>
  )
}
