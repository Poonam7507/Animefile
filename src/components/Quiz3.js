
import React from 'react';
import { useState } from 'react';
import {JigsawPuzzle} from 'react-jigsaw-puzzle/lib'
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from '../assets/images/cedric.jpg';
import '../css/Puzzle.css'
import Navbar from './Navbar';

export default function Quiz3() {
    const [text, setText] = useState("Unpuzzle the pieces( use 3 rows and 3 columns )");
    const set=()=>{
        setText("Congratulations !! Your Hufflepuff Passkey is 'Wizardry' ");
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
</div>
    </div>
  );
}
