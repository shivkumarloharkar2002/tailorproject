import React, { useState } from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import gallery from './add-folder.png'


 
export default function Gallery() {

  const [type, setType] = useState("shirt")

  const [galleryData, setGalleryData] = useState([]);

  let GetAllData = async () => {
    // pute the get api path
    let gallery = await axios.get('http://localhost:5555/api/gallaryroutes/getgalleryData');
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
      {/* <div className='Backmain'><Link to='/home'><img src={back} className='Backimg' />Back</Link></div> */}



      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="Profile-back-img" /><br></br>
          {/* <h5 className="profile-back-text">Back</h5> */}
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
      {/* <hr className='hr' /> */}
      {/* {
        galleryData.map((data) => {
          console.log(data.type)
          console.log(data)
          if (type === data.type)
            return (

              <GalleryCard className='Margin' img={data.img} id={data.id} imgname={data.price} />

            )
        })
      } */}





      {
        galleryData.map((data) => {
          if (type === data.
            cloth_type
          ) <div className='Main_Card'>
            return (
              <>
               
                  <GalleryCard img={data.img} title={data.title} id={data._id} />
               

              </>
            )
            </div>
        }
        )
      }















    </>
  )
}
