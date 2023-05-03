import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(){
    return (
    <div>
        Navigation!
        <Link to='/project'>
           <p>Projects</p> 
        </Link>
        <Link to='/aboutme'>
           <p>About Me</p> 
        </Link>
        <Link to='/resume'>
           <p>Resume</p> 
        </Link>
        <Link to='/contact'>
           <p>Contact</p> 
        </Link>
    </div>
)}



export default Navigation