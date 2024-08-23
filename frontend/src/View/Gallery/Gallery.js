import React from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'


const AllImg = [
  {
    img: 'https://m.media-amazon.com/images/I/71Jwe2kb5pL._SY879_.jpg',

  },
  {
    img: 'https://m.media-amazon.com/images/I/71LsOioK8lL._SX679_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61iGlNNjHHL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/619ZI1UaabL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51cUFJLcnGL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61EXKTY5YOL._SX679_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61dsGzMbpwL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61ET8FgyuAL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/41p39sVS5KL._AC_UF480,600_SR480,600_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71vwXrkMkzL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71vYaEq78cL._SY879_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61qL3eFFWtL._SY879_.jpg'
  },
 

]

export default function Gallery() {
  return (
    <>
      <Header />
      {/* <div className="gallery">
        <h1 className='Gfont'>Gallery</h1>
        <h1 className='Gfont'>Our Designs</h1>
      </div> */}

      <div className="gallery" >
        <ul className='Glist'>
          <li ><a className='Glist_li' href='Shirt'>Shirt</a></li>
          <li ><a className='Glist_li' href='Pant'>Pant</a></li>
          <li ><a className='Glist_li' href='Kurta'>Kurta</a></li>
          <li ><a className='Glist_li' href='Pyjama'>Pyjama</a></li>
          <li ><a className='Glist_li' href='Sut_Safari'>Suit Safari</a></li>
        </ul>
      </div>

      {
        AllImg.map((data) => {
          return (
            // <div className='GalleryBody'>
            <GalleryCard  className ='Margin' img={data.img} />
            // </div>
          )
        })


      }

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
