import React from 'react';
import Navbar from './Navbar';
import hat from '../assets/images/sortinghat.gif';
import  '../css/StyleSortinghat.css';
import {gsap} from 'gsap';
import { useEffect,useRef } from 'react';
import TextPlugin from "gsap/TextPlugin"
import Footer from './Footer';
gsap.registerPlugin(TextPlugin);

export default function About() {
  // const a=useRef(null);
useEffect(() => {
// const x1=imgbox.cu
gsap.timeline()
  .from(".imgbox",{
    // opacity:0,
    x:150,
   skewX:20,
  //  translateY:-20,
  //  translateX:50,
   ease:'elastic(1,0,5)',
  //  scale:-2,
   duration:1
  })
  .from(".text",{
    opacity:0,
    text:{value:"ziuq fo sisab eht no esuoh ruoy ni detros eb lliw uoy",delimiter:" "},
    duration:4,
    repeat:Infinity,
    repeatDelay:2
  })
}, [])

  return (
    <div className='box'>
    <Navbar/>
    <div className='quizbox'>
    <div className='imgbox' >
<img src={hat} alt=""/>
    </div>
    <div className='text'>


    {/* ziuq fo sisab eht no esuoh ruoy ni detros eb lliw uoy */}
You will be sorted in your house on the basis of quiz
<button className='quizbtn'>Start</button>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
