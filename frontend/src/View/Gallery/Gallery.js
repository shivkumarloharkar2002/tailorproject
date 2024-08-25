import React, { useState } from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'




export default function Gallery() {

  // const [type, setType] = useState("shirt")

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



  const [toggle, setToggle] = useState(false);
  let All = () => {
    setToggle((preState) => !preState);
  };

  console.log(galleryData)


  // const [type, setType] = useState("shirt")





  return (
    <>
      <Header />
      <div className='Backmain'><Link to='/home'><img src={back} className='Backimg' />Back</Link></div>


      {/* 
      <div className="gallery" >
        <ul className='Glist'>
          <p onClick={() => {
            setType("shirt")
          }}>Shirt</p>


          <p onClick={() => {
            setType("pant")
          }} >Pant</p>

          <p onClick={() => {
            setType("kurta")
          }} >Kurta</p>

          <p onClick={() => {
            setType("pyjama")
          }} >Pyjama</p>


          <p onClick={() => {
            setType("safari")
          }} >Suit Safari</p>

        </ul>
      </div>
      <hr className='hr' />
      {
        galleryData.map((data) => {
          // console.log(data.type)
          console.log(data)
          if (type === data.type)
            return (
             
              <GalleryCard className='Margin' img={data.img} id={data.id} imgname={data.price}/>
             
            )
        })
      } */}


      {/* 
      <div className='heading'>
        <h3 className="heading-h">All </h3>
        <p className="heading-a" onClick={All}>
          <span className='see'>  {" "}
            see all</span>
        </p>
      </div> */}


      {
        galleryData.map((data) => {
          return (
            <>
              <div className='dis'>
                <GalleryCard img={data.img} title={data.title} id={data._id} />
              </div>

            </>
          )
        }
        )
      }













    </>
  )
}
