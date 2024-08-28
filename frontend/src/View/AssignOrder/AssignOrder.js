import React from 'react'
import Header from '../../Component/Header/Header';
import './Assign.css';
import back from './back.png';

export default function AssignOrder() {
  return (
    <div>
      <Header />
      <a href='/home'>
      <img className='back-btn' src={back}/>
      </a>
      <p className='heding-assign'>Assign Orders</p>
      
      <div className='assign-main'>
        <div className='assign-left'>
          <p className='aa'>All</p>
          <p className='aa'>Shirt</p>
          <p className='aa'>Pant</p>
          <p className='aa'>Kurta</p>
          <p className='aa'>Pyjama</p>
          <p className='aa'>Sut Safari</p>
        </div>
        <div className='assign-line'></div>
        <div>
          <div className='assign-patti'>
            <p className='aa'>No</p>
            <p className='aa'>Date</p>
            <p className='aa'>Stutas</p>
            <p className='aa'>Order</p>
            <p className='aa'>Actions</p>
          </div>
          <div className='assign-informetion'>
            <p className='aa'>1.</p>
            <p className='aa'>25/05/2024</p>
            <p className='aa'>Processing</p>
            <p className='aa'>Shirt</p>
            <p className='aa'>Unavailable</p>
          </div>
          <div className='assign-informetion'>
            <p className='aa'>2.</p>
            <p className='aa'>05/02/2024</p>
            <p className='aa'>Complete</p>
            <p className='aa'>Pant</p>
            <p className='aa'>Review</p>
          </div>
          <div className='assign-informetion'>
            <p className='aa'>3.</p>
            <p className='aa'>13/01/2024</p>
            <p className='aa'>Complete</p>
            <p className='aa'>Kurta</p>
            <p className='aa'>Review</p>
          </div>
        </div>
      </div>
    </div>
  )
}
