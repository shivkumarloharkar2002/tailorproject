import React, { useEffect } from 'react'
import './SelectFabric.css'
import FabricCard from '../../Component/CustomerCard/FabricCard/FabricCard'
import upload from '../../Image/upload.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosConfing'

export default function SelectFabricCom() {


  const [ fabric , setFabric] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const GetFabricdata= async()=>{
    const fabricd =await axiosInstance.get('fabricroutes/getallfabric');
    setFabric(fabricd.data.data)
    console.log(fabricd.data.data)
  }


  useEffect(
    ()=>{
      GetFabricdata();
    },[]
  )
  return (
    <>

      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Fabric</h1>
      <div className='Selfab_main'>
         {
         fabric.map(
          (data)=>{
            return(
              <>
               <Link to='/addmeasurement'> <FabricCard img1={data.img1} price={data.price} /></Link>
              </>
            )
          }
         )  
        } 
        
       

        {/* <div className='fabric_main1'>
          <img src={upload} /><br />
          <input type='file' className='choose_photo' placeholder='Upload Image' />
          <h3 className='fabric_main1-txt'>Add New Fabric</h3>
        </div> */}
        <div className="file-upload-container fabric_main1">
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div
        className={`file-wrapper ${file ? 'active' : ''}`}
        onClick={() => document.getElementById('file-input').click()}
      >
        {file ? (
          <img src={file} alt="Selected" className="preview-image uploadimgheight" />
        ) : (
          <span><img src={upload} /><br/>Upload Fabric Image <br/> <h3 className='fabric_main1-txt'>Add New Fabric</h3></span>
        )}
       
      </div>
    </div>
      </div>
    </>
  )
}
