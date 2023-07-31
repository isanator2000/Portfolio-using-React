import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

function navbar() {
  return (
    <div className='navbar'>
        <div className='toggleBtn'>
            <button>

            </button>
        </div>
        <div className='links'>
            <Link to ='/'>Home</Link>
            <Link to ='/works'>Works</Link>
            <Link to ='/about'>About</Link>
        </div>

    </div>
  )
}

export default navbar