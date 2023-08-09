import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
  return (

    <div className="home">
        <section className="hero">
        <h1>Transform Your Text</h1>
        <p>Make your text editing tasks easier with our powerful text utilities.</p>        
        <Link className="nav-link active"  to="/Textform"> 
        <button type="button" className="btn btn-primary">Get Started</button></Link>
      </section>

    <section className="features">
      <div className="card">
        <img src='public/Text.png' className="card-img-top" alt="Text.png"/>
        <div className="card-body">
        <h2>What is TextUtils?</h2>
        <p className="card-text">Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism.</p>
        <Link className="nav-link active"  to="/About"> 
        <button type="button" className="btn btn-secondary">Learn More</button> </Link>
        </div>
        </div>

        <div className="card">
        <img src="public/Text.png" className="card-img-top" alt="Text.png"/>
        <div className="card-body">
        <h2>Text Analysis</h2>
        <p className="card-text">Make your text Uppercase or Lower case and many more in single click. Want to Start?</p>
        <Link className="nav-link active"  to="/Textform"> 
        <button type="button" className="btn btn-secondary">Click Here</button> </Link>
        </div>
        </div>

        <div className="card">
        <img src="public/Text.png" className="card-img-top" alt="Text.png"/>
        <div className="card-body">
        <h2>Want to Collaborate?</h2>
        <p className="card-text">Contact Us using the link below.</p>
        <Link className="nav-link active"  to="/About"> 
        <button type="button" className="btn btn-secondary">Learn More</button> </Link>
        </div>
        </div>
    </section>
    </div>
  );
};
