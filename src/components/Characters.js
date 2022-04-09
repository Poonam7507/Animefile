import React from 'react';
// import Harrypotter from './Harrypotter';
import Navbar from './Navbar';
import '../css/Stylrcharacter.css'
import MaincontentChar from './Maincontent_char'
import Footer from './Footer';

export default function Characters() {
  return (
    <div>
    <div className='charpage'>
    <Navbar/>
    <MaincontentChar/>
    <Footer/>
    {/* <Harrypotter/> */}
    </div>
    </div>
  )
}
