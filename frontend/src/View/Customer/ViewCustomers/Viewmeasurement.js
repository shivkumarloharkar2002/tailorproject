import React from 'react'
import Header from '../../../Component/Header/Header'
import { Link } from 'react-router-dom'
import back from '../../../Image/back.jpg'
import MeasurementForm from '../../../Component/Customercategory/MeasurementForm'

export default function Viewmeasurement() {
  return (
    <>
    <Header/>
    <Link to={"/viewfabric"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
      <MeasurementForm/>
    </>
  )
}
