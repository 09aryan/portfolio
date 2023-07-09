import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className="n-wrapper"> 
    <div className="n-left">
       <div className="n-name">Aryan</div>
       <span>   toogle</span>
       </div>
       <div className="n-right">
        <div className="n-list">
            <ul style={{listStyle:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button">
            Contact Us
        </button>
       </div>

    </div>
  )
}

export default NavBar
