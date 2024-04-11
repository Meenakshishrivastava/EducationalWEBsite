import React from 'react';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Ytvedio from './components/Ytvedio';
import Faculty from './components/Faculty';
import Courses from './components/Courses';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Infra from './components/Infra';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div>
   <Navbar/>
   <Slider/>
   <About/>
   <Feature/>
   <Ytvedio/>
   <Faculty/>
   <Courses/>
   <Infra/>  
  <Testimonials/>
   <Footer/>
    </div>
  );
}

export default App;
