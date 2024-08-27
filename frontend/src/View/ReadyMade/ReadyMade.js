import React, { useState } from 'react'
import './ReadyMade.css'
import ReadyMadeCard from '../../Component/ReadyMadeCard/ReadyMadeCard'
import Shirt1 from '../../Image/Shirt1.png'
import { Link } from 'react-router-dom'
import back from '../../Image/back.jpg'
import Header from '../../Component/Header/Header'

export default function ReadyMade() {

  const [type, setType] = useState("shirt")


  return (
    <>
    <Header/>
    
    <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
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
          }} className='Glist-p'>Pyjama</p>


          <p onClick={() => {
            setType("safari")
          }} className='Glist-p'>Suit Safari</p>
       </ul>
      </div>
      <hr className='hr'/>


     

    <div className='Ready_main'>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
       <ReadyMadeCard RMimg={Shirt1} RMhead={"Brushed Twill Shirt - Blue"} RMprice={"799"}/>
    </div>
    </>
  )
}
