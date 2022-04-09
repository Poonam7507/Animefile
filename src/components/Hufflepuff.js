import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img1 from '../assets/images/cedric.jpg'
import img2 from '../assets/images/hannah.jpg'
import img3 from '../assets/images/finch.jpg'
import img4 from '../assets/images/sprout.jpg'
import img5 from '../assets/images/leanne.jpg'
import '../css/hhouse.css'

export default function Hufflepuff() {
  return (
    <div className='hhouse'>
        <Navbar/>
        <div className='members'>
    <div className="team">
         <img src={img1} alt=" "/>
          <h2>HarryPotter</h2>
         </div>
         <div className="team">
         <img src={img2} alt=" "/>
         <h2>Ronald Weasley</h2>


         </div>
         <div className="team">
         <img src={img3} alt=" "/>
         <h2>Harmoine Granger</h2>


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
