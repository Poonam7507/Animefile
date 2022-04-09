import React from 'react';

import img1 from '../assets/images/harry.jpg'
import img2 from '../assets/images/ron.jpg';
import img3 from '../assets/images/hermoine.jpg'
import img4 from '../assets/images/neville.jpg'
import img5 from '../assets/images/ginny.jpg'
import img6 from '../assets/images/fred.jpg'
import img7 from '../assets/images/george.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/ghouse.css'

export default function Gryffindor() {
  return (
    <div className='ghouse'>
    <Navbar/>
    <div className='members'>
    <div className="team">
         <img src={img1} alt=" "/>

         </div>
         <div className="team">
         <img src={img2} alt=" "/>

         </div>
         <div className="team">
         <img src={img3} alt=" "/>

         </div>
         <div className="team">
         <img src={img4} width="250vw" height="300vw" alt=" "/>

         </div>
         <div className="team">
         <img src={img5} alt=" "/>

         </div>
         <div className="team">
         <img src={img6} alt=" "/>

         </div>
         <div className="team">
         <img src={img7} alt=" "/>

         </div>
    </div>
       
         <Footer/>
    </div>
  )
}
