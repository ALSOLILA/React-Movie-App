import React from 'react'
import { Link } from 'react-router-dom';


function Nav({logo}) {
  return (
    <div className="navbar">
    
    <img className="logo" src={logo}alt="movieapp"/>
   

      <div className='navflex'>
        
       <Link to="/">Home</Link>
       
       <Link to="/movies">Movies</Link>
     
        <Link to="/about">About</Link>
   
     

        </div>
     
    </div>
  )
}

export default Nav