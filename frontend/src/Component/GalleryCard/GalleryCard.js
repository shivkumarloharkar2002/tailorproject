import React from 'react'
import { Link } from 'react-router-dom';
import './GalleryCard.css';

export default function GalleryCard({img,name}) {
  return (
    <>
      <Link to={'/'} className='link'>
     <div className='Gmain '>
       <img className='Galleryimg' src={img} alt="Order Slip" />
       <h1>{name}</h1>
      </div>
     </Link>
    </>
  )
}
