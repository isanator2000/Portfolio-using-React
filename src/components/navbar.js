import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
const [openNavbar, setOpenNavbar]= useState(false);
  return (
    <div className='navbar' id={openNavbar ? 'open' : 'closed'}>
        <div className='toggleBtn'>
            <button onClick={() => setOpenNavbar(prev => !prev)}>
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to ='/'>Home</Link>
            <Link to ='/works'>Works</Link>
            <Link to ='/about'>About</Link>
            <Link to ='/contact'>Contact</Link>
            <Link to ='/resume'>Resume</Link>
        </div>

    </div>
  )
}

export default Navbar