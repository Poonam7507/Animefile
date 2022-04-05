import React from 'react';
import Navbar from './Navbar';
import hat from '../assets/images/sortinghat.gif';
import  '../css/StyleSortinghat.css'

export default function About() {
  return (
    <div className='box'>
    <Navbar/>
    <div className='quizbox'>
    <div className='imgbox'>
<img src={hat} alt=""/>
    </div>
    <div>
<h2>You will be sorted in your house on the basis of quiz</h2>
<button className='quizbtn'>Start</button>
    </div>
    </div>
    </div>
  )
}
