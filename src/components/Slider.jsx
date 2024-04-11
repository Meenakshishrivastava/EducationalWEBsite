import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fun from '../assets/fun.jpg'
import img7 from '../assets/img7.jpg';
import imgc from '../assets/imgc.jpg';
import room from '../assets/room.jpg';
import build from '../assets/build.jpg';
import stu from '../assets/stu.jpg';
import './Slider.css';
import front from '../assets/front.jpg'


const Slider = () => {
  return (
    <div>
    <Carousel>
   
    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100 "
       src={build}
        alt="First slide"
      />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 
      <Carousel.Caption>

       {/* <h1>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  */}
            
           
        <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Welcome to Core Crafters.</h1>
            <h2 className='py-4'>Explore Our Highlights!</h2>
</div>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100"
        src={room}
        alt="Second slide"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 

      <Carousel.Caption>
       
      <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Academic Excellence</h1>
            <h2 className='py-4'>Celebrating Student Achievement.</h2>
</div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100"
        src={stu}
        alt="Third slide"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 

      <Carousel.Caption>
      <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Innovative Programs</h1>
            <h2 className='py-4'>Empowering Learning Beyond Boundaries.</h2>
</div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100"
        src={imgc}
        alt="Second slide"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 

      <Carousel.Caption>
      <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Engaging Extracurricular Activities</h1>
            <h2 className='py-4'> Fostering Holistic Development.</h2>
</div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100"
        src={img7}
        alt="Second slide"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 

      <Carousel.Caption>
      <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Technology Integration</h1>
            <h2 className='py-4'>Enhancing Education for the Future</h2>
</div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'95vh'}}
        className="d-block w-100"
        src={fun}
        alt="Second slide"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 

      <Carousel.Caption>
      <div className='absolute w-full h-full flex top-0 flex-col justify-center text-center text-white p-4'> 
            <h1>Global Perspectives</h1>
            <h2 className='py-4'> Cultivating Responsible Global Citizens</h2>
</div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default Slider