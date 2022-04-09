import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img1 from '../assets/images/chochang.jpg'
import img2 from '../assets/images/luna.jpg'
import img3 from '../assets/images/warren.jpg'
import img4 from '../assets/images/lovegood.jpg'
import img5 from '../assets/images/quirrell.jpg'
import '../css/rhouse.css'
export default function Ravenclaw() {
  return (
    <div className='rhouse'>
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
         <img src={img4}  alt=" "/>

         </div>
         <div className="team">
         <img src={img5} alt=" "/>

         </div>
        
    </div>

    
    <Footer/>
    </div>
  )
}
