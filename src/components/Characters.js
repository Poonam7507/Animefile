import React from 'react';
// import Harrypotter from './Harrypotter';
import Navbar from './Navbar';
import '../css/Stylrcharacter.css'
import MaincontentChar from './Maincontent_char'

export default function Characters() {
  return (
    <div className='charpage'>
    <Navbar/>
    <MaincontentChar/>
    {/* <Harrypotter/> */}
    </div>
  )
}
