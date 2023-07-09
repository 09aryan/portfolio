import React, { Component } from 'react'
import './intro.css'
import Github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

import linkedin from '../../img/linkedin.png'

export class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <div className='i-left'>
         <div className='i-name'>
            <span>Hy! I am </span>
            <span>Aryan Kumar</span>
            <span>FffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
            </div>   
  <button className='button i-button'>Hire me</button>
  <div className="i-icons">
    <a href='/'>
    <img src={Github} alt=""/>
    </a>
   
    <img src={instagram} alt=""/>
    <img src={linkedin} alt=""/>

  </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt=""/>
    <img src={Vector2} alt=""/>
    <img src={boy} alt=""/>
    
        </div>
      </div>
    )
  }
}

export default Intro
