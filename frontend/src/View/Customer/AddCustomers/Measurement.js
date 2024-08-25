import React from 'react'
import './Measurement.css'
import collar from '../../../Image/collar.webp'
import length from '../../../Image/fullLenght.webp'
import sleeve from '../../../Image/sleeve.webp'
import waist from '../../../Image/waist.webp'
import cheast from '../../../Image/cheast.webp'
import shoulder from '../../../Image/shoulder.webp'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'
import { useState } from 'react'
import MeasurementForm from '../../../Component/Customercategory/MeasurementForm'



export default function Measurement() {

  return (
    <>
      <header className='top_nav'><Header /></header>
      <div className='backmain'><Link to='/choosefabric'><img src={back} className='backimg' />Back</Link></div>
      <MeasurementForm/>
    </>
  )
}
