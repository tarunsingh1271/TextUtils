import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import image1 from './images/Text.png';

export default function Home(){
    const data = [
        {
            title: "What is TextUtils?",
            des: " Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism.",
            link:  "/About",
            backgroundColor: "#e3f6f5",
            image: "image2"
        },
        {
            title: "Text Analysis",
            des: " Make your text Uppercase or Lower case and many more in single click. Want to Start?",
            link:  "/Textform",
            backgroundColor: "#e3f6f5",
            image: "image3"

        },
        {
            title: "Want to Collaborate?",
            des: " Contact Us using the link below.",
            link:  "/About",
            backgroundColor: "#e3f6f5",
            image: "image4"
        }
      ]  
      return (
    <div className="home">
        <section className="hero">
        <img src={image1} alt='Text'/>
        
        <h1>Transform Your Text</h1>
        <p>Make your text editing tasks easier with our powerful text utilities.</p>
        <Link className="nav-link active"  to="/Textform"> 
        <button type="button" className="btn btn-primary">Get Started</button></Link>
      </section>

    <section className="features"> 

        {data.map((d,index)=>          
             (<Card key={index} title= {d.title } des= {d.des} link= {d.link} backgroundColor= {d.backgroundColor} image={d.image}/>),
            //  <img src={d.cardImage} class="card-img-top" alt="laptop"/>
        )}
    </section>
    </div>
  );
};
