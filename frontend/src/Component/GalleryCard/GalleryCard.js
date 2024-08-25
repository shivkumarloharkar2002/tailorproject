import React from 'react'
import { Link } from 'react-router-dom';
import './GalleryCard.css';
// import NextGalleryCard from '../../View/Gallery/NextGalleryCard.js'

export default function GalleryCard({ img, id }) {
  return (
    <>
      <Link to={`/NextGalleryCard/${id}`} className='link'>
        <div className='Gmain '>
          <img className='Galleryimg' src={img} alt="Order Slip" />
         

        </div>
      </Link>
    </>
  )
}
