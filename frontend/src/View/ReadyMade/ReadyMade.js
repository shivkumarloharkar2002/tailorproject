import React from 'react'
import './ReadyMade.css'
import ReadyMadeCard from '../../Component/ReadyMadeCard/ReadyMadeCard'
import Shirt1 from '../../Image/Shirt1.png'

import Header from '../../Component/Header/Header'

export default function ReadyMade() {
  return (
    <>
    <Header/>
    {/* <header><NavbarReady/> </header> */}
    {/* <div className="gallery">
        <h1 className='Gfont'>Gallery</h1>
        <h1 className='Gfont'>Our Designs</h1>
      </div> */}

      <div className='gallery'>
        <ul className='Glist'>
          <li ><a className='Glist_li' href='Shirt'>Shirt</a></li>
          <li ><a className='Glist_li' href='Pant'>Pant</a></li>
          <li ><a className='Glist_li' href='Kurta'>Kurta</a></li>
          <li ><a className='Glist_li' href='Pyjama'>Pyjama</a></li>
          <li ><a className='Glist_li' href='Sut_Safari'>Suit Safari</a></li>
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
