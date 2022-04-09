import React from 'react';
import Frontpage from './Frontpage';
import Navbar from './Navbar';
import '../css/Home.css';
import Footer from './Footer';




export default function Home() {
  return (
<>
    <div className='app'>
            <Navbar/>
        
            <Frontpage  />
            <Footer/>
    </div>
    </>
  )
}
