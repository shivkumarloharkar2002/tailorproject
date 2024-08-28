import React from 'react'
import './ReadyMadeCard.css'
import { Link } from 'react-router-dom'


export default function ReadyMadeCard({img , title , price , id}) {
  return (
    <>
    <Link className='readymade' to={`/ready/${id}`}>
    <div className='ReadyC_main'>
        <img src={img} className='Ready_img'/>
        <h4 className='RMhead'>{title}</h4>
        <h5 className='RMhead'>RS:{price}/-</h5>
    </div>
    </Link>
    </>
  )
}
