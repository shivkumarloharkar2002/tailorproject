import React, { useState } from 'react'
import './FabricCard.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

export default function FabricCard({ img1, price, id }) {

  let [fabricId, setfabricId] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    if (fabricId) {
      localStorage.setItem("fabric", fabricId);
      console.log('Category stored in localStorage:', fabricId);
      navigate("/choosefabric");
    }
  }, [fabricId]);

  return (
    <>
      <div className='fabric_main' onClick={()=>{
        console.log(id)
        setfabricId(id)
      }}>
        <img src={img1} className='fabricimg' />
        <h3 style={{ margin: '20px' }}>{price}/- per M</h3>
      </div>
    </>
  )
}
