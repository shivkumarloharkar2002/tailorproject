import React from 'react'
import Header from '../../Component/Header/Header';
import './Assign.css';

export default function AssignOrder() {
  return (
    <div>
      <Header/>
      <p className='heding-assign'>Assign Orders</p>
      <div className='assign-main'>
        <div className='assign-left'>
            <p>All</p>
            <p>Shirt</p>
            <p>Pant</p>
            <p>Kurta</p>
            <p>Pyjama</p>
            <p>Sut Safari</p>
        </div>
        <div className='assign-line'></div>
        <div>
      <div className='assign-patti'>
        <p>No</p>
        <p>Date</p>
        <p>Stutas</p>
        <p>Order</p>
        <p>Actions</p>
      </div>
      <div className='assign-informetion'>
        <p>1.</p>
        <p>25/05/2024</p>
        <p>Processing</p>
        <p>Shirt</p>
        <p>Unavailable</p>
      </div>
      <div className='assign-informetion'>
        <p>1.</p>
        <p>25/05/2024</p>
        <p>Processing</p>
        <p>Shirt</p>
        <p>Unavailable</p>
      </div>
      <div className='assign-informetion'>
        <p>1.</p>
        <p>25/05/2024</p>
        <p>Processing</p>
        <p>Shirt</p>
        <p>Unavailable</p>
      </div>
      </div>
    </div>
    </div>
  )
}
