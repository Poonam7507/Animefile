import React from 'react';
import { useEffect,useState } from 'react';
import Navbar from './Navbar';
import hat from '../assets/images/sortinghat.gif';
import  '../css/StyleSortinghat.css';
import { Link } from 'react-router-dom';

import {gsap} from 'gsap';
import TextPlugin from "gsap/TextPlugin"
import Footer from './Footer';
import Quiz from './Quiz1';
gsap.registerPlugin(TextPlugin);

export default function About() {
  const [showbtn, setShowbtn] = useState(false);
  const disbtn=()=>{
    setShowbtn(true);
  }
  // const a=useRef(null);
useEffect(() => {
// const x1=imgbox.cu
gsap.timeline()
  .from(".imgbox",{
    scale:0,
    y:-10,
   
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
    <div>
    <div className='text'>


    {/* ziuq fo sisab eht no esuoh ruoy ni detros eb lliw uoy */}
You will be sorted for tour in the house on the basis of Puzzle
    </div>

    <button className='quizbtn' onClick={disbtn}>Start </button>
    <div className='btngrp' style={{display:showbtn?"block":"none"}}>
    <div>
    <Link to="/jigpuzzle1">
    <a href="./Quiz1" > <button className='pbtn'>Gryffindor Puzzle</button></a>

    </Link>
    </div>
    <div>
    <Link to="/jigpuzzle2">
    <a href="./Quiz2" > <button className='pbtn'>Slythern Puzzle</button></a>

    </Link>
    </div>
    <div>
    <Link to="/jigpuzzle3">
    <a href="./Quiz3" > <button className='pbtn'>Hufflepuff Puzzle</button></a>

    </Link>
    </div>
    <div>
    <Link to="/jigpuzzle4">
    <a href="./Quiz4" > <button className='pbtn'>Ravenclaw Puzzle</button></a>

    </Link>
    </div>
      </div>
    </div>

    </div>
    </div>
  )
}

