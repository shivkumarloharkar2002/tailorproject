import React from 'react'
import { Link } from 'react-router-dom';
import './GalleryCard.css';
// import NextGalleryCard from '../../View/Gallery/NextGalleryCard.js'

export default function GalleryCard({ img, id ,title}) {
  return (
    <>
      <Link to={`/NextGalleryCard/${id}`} className='link'>

      <div className='mcard'>
                <div className="card mx-2 my-5" style={{ "width": "15rem;" }}>
                    <img src={img} className="card-img-top height " alt="img" />
                    {/* <h1>{title}</h1> */}
                </div>
            </div>


     
         

        
      </Link>
    </>
  )
}

