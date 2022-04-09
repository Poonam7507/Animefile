import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img1 from '../assets/images/draco.jpg'
import img2 from '../assets/images/crabbe.jpg'
import img3 from '../assets/images/tomriddle.jpg'
import img4 from '../assets/images/bellatrix.jpg'
import img5 from '../assets/images/goyle.jpg'
import '../css/shouse.css'


export default function Slythern() {
  return (
    <div className='shouse'>
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
         <img src={img4} alt=" "/>

         </div>
         <div className="team">
         <img src={img5} alt=" "/>

         </div>
        </div>
        <Footer/>
    </div>
  )
}
