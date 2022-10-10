import React from 'react'
import './GoogleMap'
import GoogleMap from './GoogleMap'
import './Main.css'
import Activities from './Activities'
import slider from 'react-slick/lib/slider'
import Intro from './Intro'
import {Link}  from 'react-router-dom'
import { useState } from 'react'
import Sliderimage from './Sliderimage'
function Main() {
  const[search,setSearch]=useState("");
  return (
    <div>
      {/* <GoogleMap /> */}
     

    <div className='back'>
      <div className='topdash'>
        <div>
       </div>
  <div className='buttons'>
   <Link to={'/main'}> <button className='dashbutton'>Contribute</button></Link>
    <button className='dashbutton'>Logout</button>
  </div>
     
  </div>
      <div className='dashboardmain'>
       
        <div className='secondline'>
         
        </div>
        <div className='thirdline'>
          <img src="#" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main