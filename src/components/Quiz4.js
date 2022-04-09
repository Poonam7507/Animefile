import React from 'react';
import { useState } from 'react';
import {JigsawPuzzle} from 'react-jigsaw-puzzle/lib'
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from '../assets/images/chochang.jpg';
import '../css/Puzzle.css'
import Footer from './Footer';
import Navbar from './Navbar';

export default function Quiz4() {
    const [text, setText] = useState("Unpuzzle the pieces");
    const set=()=>{
        setText("Congratulations !! Your Ravenclaw Passkey is 's' ");
    };
  return (
    <div className='puzzlebox'>
    <Navbar/>
<div>
<h2 className='tag'> {text}</h2>
<JigsawPuzzle
imageSrc={img}
rows={3}
columns={3}
onSolved={set}
className="jigsaw-puzzle"
/>
<Footer/>
</div>
    </div>
  );
}
