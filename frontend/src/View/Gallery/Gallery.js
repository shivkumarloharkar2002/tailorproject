import React, { useState } from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


const AllImg = [
  {
    img: 'https://m.media-amazon.com/images/I/71Jwe2kb5pL._SY879_.jpg',
    type: "shirt"

  },
  {
    img: 'https://m.media-amazon.com/images/I/71LsOioK8lL._SX679_.jpg',
    type: "shirt"
  },
  {
    img: 'https://m.media-amazon.com/images/I/61iGlNNjHHL._SY879_.jpg',
    type: "shirt"
  },
  {
    img: 'https://m.media-amazon.com/images/I/61iGlNNjHHL._SY879_.jpg',
    type: "shirt"
  },
  {
    img: 'https://m.media-amazon.com/images/I/61iGlNNjHHL._SY879_.jpg',
    type: "shirt"
  },
  {
    img: 'https://m.media-amazon.com/images/I/61iGlNNjHHL._SY879_.jpg',
    type: "shirt"
  },
  {
    img: 'https://m.media-amazon.com/images/I/619ZI1UaabL._SY879_.jpg',
    type: "pant"
  },
  // {
  //   img: 'https://m.media-amazon.com/images/I/51cUFJLcnGL._SY879_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/61EXKTY5YOL._SX679_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/61dsGzMbpwL._SY879_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/61ET8FgyuAL._SY879_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/41p39sVS5KL._AC_UF480,600_SR480,600_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/71vwXrkMkzL._SY879_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/71vYaEq78cL._SY879_.jpg'
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/61qL3eFFWtL._SY879_.jpg'
  // },


]

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



  const [type, setType] = useState("shirt")





  return (
    <>
      <Header />
      <div className='Backmain'><Link to='/home'><img src={back} className='Backimg' />Back</Link></div>



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
              // <div className='GalleryBody'>
              <GalleryCard className='Margin' img={data.img} id={data.id} imgname={data.price}/>
              // </div>
            )
        })


      }





      {/* {
        AllImg.map((data) => {
          return (
            <>
              <GalleryCard img={data.img} />
            </>
          )
        })

      } */}







      {/* <div className='GalleryBody'>
        <div className='GalleryM'>
          <img className='galleryimg' src={shirt1}></img>
          <img className='galleryimg' src={shirt2}></img>
          <img className='galleryimg' src={shirt3}></img>
          <img className='galleryimg' src={shirt4}></img>
        </div>

        <div className='GalleryM'>
          <img className='galleryimg' src={shirt5}></img>
          <img className='galleryimg' src={shirt6}></img>
          <img className='galleryimg' src={shirt7}></img>
          <img className='galleryimg' src={shirt8}></img>
        </div>
      </div> */}


      {/* total pages */}
      {/* <a class="bus" target="boss" href="./bus.html">Bus</a>
      <a class="bus" target="boss" href="./truck.html">Truck</a>
      <a class="bus" target="boss" href="./lightvehicle.html">Light Vehicles</a>
      <a class="bus" target="boss" href="./defence.html"> Defence</a>
      <iframe class="aa" src="./bus.html" name="boss" frameborder="0"></iframe> */}
    </>
  )
}
