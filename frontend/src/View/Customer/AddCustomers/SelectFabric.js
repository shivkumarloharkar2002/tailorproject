import React, { useEffect } from 'react'
import './SelectFabric.css'
import FabricCard from '../../../Component/CustomerCard/FabricCard/FabricCard'
import upload from '../../../Image/upload.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'

export default function SelectFabricCom() {

  const clothData = localStorage.getItem('cloth');
  console.log(clothData)


  const [fabric, setFabric] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const GetFabricdata = async () => {
    const fabricd = await axios.get('http://localhost:5555/api/fabricroutes/getallfabric');
    setFabric(fabricd.data.data)
    console.log(fabricd.data.data)
  }


  useEffect(
    () => {
      GetFabricdata();
    }, []
  )
  return (
    <>

      <header className='top_nav'><Header /></header>
      <Link to={"/selectcategory"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Fabric</h1>
      <div className='Selfab_main'>

        {
          fabric.map(
            (data) => {
              if (clothData === data.cloth_type)
                return (
                  <>
                    <FabricCard img1={data.img1} price={data.price} id={data._id} />
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
              <span><img src={upload} /><br />Upload Fabric Image <br /> <h3 className='fabric_main1-txt'>Add New Fabric</h3></span>
            )}

          </div>
        </div>
      </div>
    </>
  )
}
















