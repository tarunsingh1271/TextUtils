import React from 'react'
//import slide from './slide';


export default function About(props) {
  return (
    <>

    <div className="aboutus">
      <h1>About Us</h1>
      <p>Welcome to our website! We are a passionate team dedicated to make your Life Eazy.</p>
      <p>Our mission is to provide you all the functionalities so that you can do alomost anything with your text.</p>
      <p>Feel free to explore our website and learn more about Us.</p>    
    </div>
    
    <div class="carousel-inner">
    <div class="carousel-item active">
     
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    </div>
    <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 TextUtils. All rights reserved.</p>
        </div>
      </footer>
    
    </>
  )
}
