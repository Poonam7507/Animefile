import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function Card_char({title,description,image}) {
 const card=useRef(null);
 const cardimage=useRef(null);

 useEffect(() => {
    const e1=card.current;
    const e2=cardimage.current;
    gsap.from(e1,{scale:0,
        scrollTrigger:{
            trigger:e1,
           
            toggleActions:"play none restart complete",
            scrub:true,
            

        }
      
    })
  
  
  }, [])
  return (
    <div className='charcard' ref={card}>

<h1 className='title'>
       <b>{title}</b> 
    </h1>
<div className='frame1'>
<div className='image1' ref={cardimage}>

          {image} 
</div>
    <div className='box1'>
    <p className='box1_content'>
    
           {description}
    </p>
    </div>
    </div>

    </div>
  )
}
