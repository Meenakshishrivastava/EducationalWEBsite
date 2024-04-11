import React from 'react';

import test1 from '../assets/test1.jpg'

import test7 from '../assets/test7.jpg';
import test6 from '../assets/test6.jpg';
import test3 from '../assets/test3.jpg';
import './Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }



const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
             
            }
          }
        ]
      };
    
  return (


    <div className='container'>  
        <div className='fw-bold text-center'>
            <h1>Our Students Voice</h1>
            <p></p>
            </div>
         <Slider {...settings}>
      <div className='card'>
        <img src={test1} alt=''className='w-100'/>
        <div className='card-body'>
            <h3>TARUN STEELE</h3>
            <p>I'm glad that I came across Core Crafter in Creative Educational institute.They're offering a flexible schedule,perfect for working students like me.</p>
        </div>
      </div>
      <div className='card' >  
      <img src={test7} alt=''className='w-100'/>
      <div className='card-body'>
      <h3>TARUN STEELE</h3>
            <p>I'm glad that I came across Core Crafter in Creative Educational institute.They're offering a flexible schedule,perfect for working students like me.</p>
        </div>
      </div >
      <div className='card'> 
      <img src={test6} alt=''className='w-100'/>
      <div className='card-body'>
      <h3>TARUN STEELE</h3>
            <p>I'm glad that I came across Core Crafter in Creative Educational institute.They're offering a flexible schedule,perfect for working students like me.</p>
        </div>
      </div >
      <div className='card'> 
      <img src={test3} alt=''className='w-100'/>
      <div className='card-body'>
      <h3>TARUN STEELE</h3>
            <p>I'm glad that I came across Core Crafter in Creative Educational institute.They're offering a flexible schedule,perfect for working students like me.</p>
        </div>
      </div >
     
    </Slider>
    </div>

  
  );
}

export default Testimonials