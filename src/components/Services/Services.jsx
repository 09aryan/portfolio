import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className='Services'>
        <div className="awesome">
           <span>My Awesome</span>
           <span>services</span>
           <span>aaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br/>
            sdddddddddddddddddddd
            </span>
         <button className='button s-button'>Download Cv</button>
         <div className="blur s-blur1" style={{ background: "#54044b94" }}></div>
         </div>
        <div className="cards">
           <div style={{left:'14rem'}}> 
           <Card 
             emoji={HeartEmoji}
             heading="Design"
             detail="skill write here"
             />

           </div>
        </div>

            
    </div>
  )
}

export default Services
