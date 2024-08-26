import React, { useState } from 'react'
import './Gallery.css'
import Header from '../../Component/Header/Header'
import GalleryCard from '../../Component/GalleryCard/GalleryCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'




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



  const [toggle, setToggle] = useState(false);
  let All = () => {
    setToggle((preState) => !preState);
  };

  console.log(galleryData)


  // const [type, setType] = useState("shirt")





  return (
    <>
      <Header />
      {/* <div className='Backmain'><Link to='/home'><img src={back} className='Backimg' />Back</Link></div> */}

      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>



      <div className="gallery-box" >
        <ul className='Glist'>
          <p onClick={() => {
            setType("shirt")
          }}  className='Glist-p'>Shirt</p>


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



      {/* <div className='heading'>
        <h3 className="heading-h">All </h3>
        <p className="heading-a" onClick={All}>
          <span className='see'>  {" "}
            see all</span>
        </p>
      </div> */}


      {
        galleryData.map((data) => {
          if (type === data.
            cloth_type
            )
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


      {/* {toggle ? (
                <div className="all">
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
                </div>
            ) : (
                <div className="box1">
                    {
                        galleryData.map((data) => {
                            return (
                                <>
                                    <div className='dis'>
                                        <GalleryCard img={data.img} id={data._id} />
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
            )} */}












    </>
  )
}
