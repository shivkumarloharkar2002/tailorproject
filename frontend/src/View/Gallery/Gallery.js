import React, { useState } from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import gallery from './add-folder.png'
import axiosInstance from '../../axiosConfing'



export default function Gallery() {

  const [type, setType] = useState("shirt")

  const [galleryData, setGalleryData] = useState([]);

  let GetAllData = async () => {
    // pute the get api path
    let gallery = await axiosInstance.get('gallaryroutes/getgalleryData');
    setGalleryData(gallery.data.data)
    console.log(gallery.data)
  }

  useEffect(
    () => {
      GetAllData();
    }, []
  )

  console.log(galleryData)

  return (
    <>
      <Header />

      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="Profile-back-img" /><br></br>

        </div>
      </Link>

      <div >
        <h2 className='GallaryHedding'>Gallery</h2>
      </div>

      <div className="gallery-box" >
        <ul className='Glist'>
          <p onClick={() => {
            setType("shirt")
          }} className='Glist-p'>Shirt</p>


          <p onClick={() => {
            setType("pant")
          }} className='Glist-p'>Pant</p>

          <p onClick={() => {
            setType("kurta")
          }} className='Glist-p'>Kurta</p>

          <p onClick={() => {
            setType("pyjama")
          }} className='Glist-p'>Pyjama</p>


          <p onClick={() => {
            setType("safari")
          }} className='Glist-p'>Suit Safari</p>

          <a href='/galleryform'><img src={gallery} alt="" className="Profile-back-img" />
          </a>
        </ul>
      </div>


      <div className='Ready_main'>

        {
          galleryData.reverse().map((data) => {
            if (type === data.
              cloth_type
            )


              return (
                <>
                  <div className='Main_Card'>
                    <GalleryCard img={data.img} title={data.title} id={data._id} />
                  </div>

                </>
              )
          }

          )
        }

      </div>





    </>
  )
}
