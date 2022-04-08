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
gsap.registerPlugin(ScrollTrigger);




export default function Contact() {
  useEffect(() => {
    const arrColors=["navy","blue","royalblue","slateblue","cornflowerblue","dodgerblue","deepskyblue","lightskyblue","lightblue","powderblue"]
    gsap.set(".thoughts",{
  backgroundColor:gsap.utils.wrap(arrColors)
    })

    const ty=gsap.timeline()
    
    
    ty.to(".t1 img",{
  //  left:'50%',
  //  top:'50%',
   margin:"5%",
   marginBottom:"2%",
   x:"400",
   duration:2,
   skewX:5,
   rotationY:360,
  //  skew:20,
  //  xPercent:-50,
  //  yPercent:-50,

      // backgroundColor:"gray",
      // x:100,
      
    
    
      scrollTrigger:{
        trigger:".t1",
        // toggleActions:"play none none none",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t2 img",{
      // backgroundColor:"navyblue",
    //  x:-100,

    margin:"5%",
   marginBottom:"2%",

    x:"400",
    duration:2,
    skewX:5,
    rotationY:360,
    
    
      scrollTrigger:{
        trigger:".t2",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t3 img",{
      // backgroundColor:"blue",
    //  x:100,
    margin:"5%",
   marginBottom:"2%",

    x:"400",
    duration:2,
    skewX:5,
    rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t3",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t4 img",{
      // backgroundColor:"red",
    // x:-100,

    margin:"5%",
   marginBottom:"2%",

    x:"400",
    duration:2,
    skewX:5,
    rotationY:360,
  
      scrollTrigger:{
        trigger:".t4",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t5 img",{
      // backgroundColor:"orange",
      // x:100,

      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t5",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t6 img",{
      // backgroundColor:"pink",
      // x:-100,


      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,
  
      scrollTrigger:{
        trigger:".t6",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t7 img",{
      // backgroundColor:"green",

      // x:100,
      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,
      
   
      scrollTrigger:{
        trigger:".t7",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t8 img",{
      // backgroundColor:"skyblue",
      // x:-100,

      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,
      
  
      scrollTrigger:{
        trigger:".t8",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t9 img",{
      // backgroundColor:"crimson",
      // x:100,
      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,

      
   
      scrollTrigger:{
        trigger:".t9",
        markers:true,
        scrub:true

      }
    })
    ty.to(".t10 img",{
      // backgroundColor:"brown",
      // x:-100,
      margin:"5%",
   marginBottom:"2%",

      x:"400",
      duration:2,
      skewX:5,
      rotationY:360,

      
  
      scrollTrigger:{
        trigger:".t10",
        markers:true,
        scrub:true
        
      }
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
    </div>
  )
}
