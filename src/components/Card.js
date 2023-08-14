import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './images/Text.png';
import image2 from './images/simp.png';
import image3 from './images/simp.png';
import image4 from './images/simp.png';

export default function Card(props) {
  return (
    <>
    
      <div className="card">
      <img src="{props.image}" className="card-img-top" alt="laptop"/>
        <div className="card-body">
        <h2 className='title' style={{backgroundColor: props.backgroundColor}} > {props.title=== undefined?"error":props.title} </h2>
        <p className="card-text">{props.des}</p>
        <Link className="nav-link active"  to={props.link}> 
        <button type="button" className="btn btn-secondary">Learn More</button> </Link>
        </div>
    </div>
    </>
  )
}