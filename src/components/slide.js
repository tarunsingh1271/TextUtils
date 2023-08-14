import React from 'react'
import image from './images/about.jpg'
import image1 from './images/laptop.png'
import image2 from './images/Text.png'
import './css/Pages.css'


export default function Slide() {
  return(
<>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
  
  </>
  

  )
  
}