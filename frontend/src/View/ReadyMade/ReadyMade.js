import React, { useEffect, useState } from 'react'
import './ReadyMade.css'
import ReadyMadeCard from '../../Component/ReadyMadeCard/ReadyMadeCard'
import { Link } from 'react-router-dom'
import back from '../../Image/back.jpg'
import axios from 'axios'
import Header from '../../Component/Header/Header'
import gallery from '../Gallery/add-folder.png'


export default function ReadyMade() {

  const [type, setType] = useState("shirt")

  const [ReadyData, setReadyData] = useState([]);

  const GetReadydata = async () => {
    const readymade = await axios.get('http://localhost:5555/api/readymaderoutes/getreadymadedata');
    setReadyData(readymade.data.data);
    console.log(readymade.data)
  }

  useEffect(
    () => {
      GetReadydata();
    }, []
  )
  console.log(ReadyData)
  return (
    <>
      <Header />

      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>

      <div className='readymade'>

        <ul className='Rlist'>
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
          }} className='Glist-p'>Payjama</p>


          <p onClick={() => {
            setType("safari")
          }} className='Glist-p'>Suit Safari</p>
          

<a href='/readymadeform'><img src={gallery} alt="" className="Profile-back-img" />
</a>
        </ul>
      </div>
      <hr className='hr' />
      <div className='Ready_main'>

        {
          ReadyData.map(
            (data) => {
              if (type === data.
                cloth_type)
                return (
                  <>

                    <ReadyMadeCard img={data.img} title={data.title} price={data.price} id={data._id}/>

                  </>
                )
            })
        }

      </div>
    </>
  )
}
