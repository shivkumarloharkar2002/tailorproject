import React from 'react'
import './Measurement.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'
import { useState } from 'react'
import MeasurementForm from '../../../Component/Customercategory/MeasurementForm'



export default function Measurement() {

  return (
    <>
      <Header />
      <Link to={"/choosefabric"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link> 
      <MeasurementForm />
    </>
  )
}
