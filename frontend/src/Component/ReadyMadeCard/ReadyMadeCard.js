import React from 'react'
import './ReadyMadeCard.css'


export default function ReadyMadeCard({RMimg , RMhead , RMprice}) {
  return (
    <>
    <div className='ReadyC_main'>
        <img src={RMimg} className='Ready_img'/>
        <h4 className='RMhead'>{RMhead}</h4>
        <h5 className='RMhead'>RS:{RMprice}/-</h5>
    </div>
    </>
  )
}
