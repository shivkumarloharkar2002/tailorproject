import React from 'react'
import { Link } from 'react-router-dom';
import './GalleryCard.css';
// import NextGalleryCard from '../../View/Gallery/NextGalleryCard.js'

export default function GalleryCard({title, img, id }) {
  return (
    <>
      <Link to={`/NextGalleryCard/${id}`} className='link'>


        <div className="G_MAIN" >
          <h2>{title}</h2>
          <img src={img} className="Img_height " alt="img" />
        </div>


      </Link>
    </>
  )
}

