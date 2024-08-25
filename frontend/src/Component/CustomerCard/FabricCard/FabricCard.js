import React from 'react'
import './FabricCard.css'

export default function FabricCard({img1 , price}) {
  return (
    <>
    <div className='fabric_main'>
        <img src={img1} className='fabricimg'/>
        <h3 style={{margin:'20px'}}>{price}/- per M</h3>
    </div>
    </>
  )
}
