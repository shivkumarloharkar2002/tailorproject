import React from 'react'
import Header from '../../Component/Header/Header.js'
import './About.css';
import shop from './shop.jpg';
import worker from './worker.jpeg';
import talior from './talior.jpg';
import store from './store.jpg';

export default function About() {
  return (
    <div>
      <Header/>
      
      <div>
      <p className='heding-about'>About Us</p>
      <div className='abos'>
        <img className='abo-img-1' src={shop}/>
        <div className='abo-text'>
          <h1 className='heding'>Goals</h1>
          <p>Our goal is to provide the best products and services to our customers. The Tailor Shop is located on The Citadel campus between the Cadet Store and Dry Cleaning Services.The Tailor Shop issues all tailored uniform items to cadets and performs alterations to cadets uniforms. Services are also available to all faculty, staff, students, Alumni, and anyone who needs top notch tailoring services. Our full service shop offers alterations on both military uniforms and civilian clothing.</p>
        </div>
      </div>
      <div className='aboss'>
        <div className='abo-text-2'>
          <h1 className='heding'>Career</h1>
          <p>Tailors take on a range of duties and responsibilities to ensure the creation of well-fitting and stylish garments. A tailor’s duties and responsibilities may include:Sewing and measuring clothing Designing and creating clothes from scratch for a customer, such as suits, jackets, blazers, pants and more Fixing clothes that have been damaged or ripped Altering clothes to fit better, including making garments shorter, longer, tighter or looser Ironing and steaming clothes that are finished and ready to be picked up by customers </p>
        </div>
        <img className='abo-img-2' src={worker}/>
      </div>
      <div className='abo'>
        <img className='abo-img-1' src={talior}/>
        <div className='abo-text'>
          <h1 className='heding'>Mission</h1>
          <p>At The Tailor Shop our mission is to deliver exceptional craftsmanship and personalized service, tailoring garments that embody individual style. We aim to be the premier destination for those seeking sartorial excellence, where tradition meets contemporary elegance in every stitch."
          </p>
        </div>
      </div>
      <img className='store-img' src={store}/>
      </div>
    </div>
  )
}
