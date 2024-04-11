import React from 'react'
import child from "../assets/child.jpg" 
import InfraCard from './InfraCard'
import front from '../assets/front.jpg'
import ground from '../assets/ground.jpg'
import lab from '../assets/lab.jpg'
import audi from '../assets/audi.jpg'
import lib from '../assets/lib.jpg'

import hall from '../assets/hall.jpg'

const Infra = () => {
  return (
    <div className='m-7'>
        <div className='fw-bold text-center'><h1>Infrastructure</h1></div>

    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <InfraCard bg={front} text='Main Buiding' />
    <InfraCard bg={ground} text='PlayGround' />
    <InfraCard bg={audi} text='Auditorium' />
    <InfraCard bg={lab} text='Science Labotrary' />
    <InfraCard bg={lib} text='Liberary' />
    <InfraCard bg={hall} text='Hall' />
    
        
    </div>
    </div>
  )
}

export default Infra