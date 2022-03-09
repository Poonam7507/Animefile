import React from 'react';
import Frontpage from './Frontpage';
import Navbar from './Navbar';
import '../css/Home.css';



export default function Home() {
  return (
<>
    <div className='app'>
            <Navbar/>
        
            <Frontpage  />
    </div>
    </>
  )
}
