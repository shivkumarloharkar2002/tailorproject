import React from 'react'
import './FabricCard.css'

export default function FabricCard({fabricimg , price}) {
  return (
    <>
    <div className='fabric_main'>
        <img src={fabricimg} className='fabricimg'/>
        <h3>{price}/- per M</h3>
    </div>
    </>
  )
}
