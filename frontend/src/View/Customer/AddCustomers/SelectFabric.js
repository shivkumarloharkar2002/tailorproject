import React from 'react'
import './SelectFabric.css'
import FabricCard from '../../../Component/CustomerCard/FabricCard/FabricCard'
import fab1 from '../../../Image/fab1.jpeg'
import fab2 from '../../../Image/fab2.jpeg'
import fab3 from '../../../Image/fab3.jpeg'
import fab4 from '../../../Image/fab4.jpeg'

export default function SelectFabric() {
  return (
  <>
   <header className='top_nav'></header>
   <h1 style={{textAlign:'center'}}>Fabric</h1>
  <div className='Selfab_main'>
    <FabricCard fabricimg={fab1}/>
    <FabricCard fabricimg={fab2}/>
    <FabricCard fabricimg={fab3}/>
    <FabricCard fabricimg={fab4}/>
  </div>
  </>
  )
}
