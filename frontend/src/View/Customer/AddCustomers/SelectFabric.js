import React, { useEffect } from 'react'
import './SelectFabric.css'
import FabricCard from '../../../Component/CustomerCard/FabricCard/FabricCard'
import upload from '../../../Image/upload.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'
import FabricForm from '../../Admin/FabricForm/FabricForm'

export default function SelectFabricCom() {

  const clothData = localStorage.getItem('cloth');
  console.log(clothData)


  const [fabric, setFabric] = useState([]);
  // const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   if (event.target.files.length > 0) {
  //     setFile(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  const GetFabricdata = async () => {
    const fabricd = await axios.get('http://localhost:5555/api/fabricroutes/getallfabric');
    setFabric(fabricd.data.data)
    console.log(fabricd.data.data)
  }

  const [showModal, setShowModal] = useState(false);

  const closeModal = ()=>{
    setShowModal(false)
  }

  const MyModel = () => {
    return (
      <>

        <div className='main_fab_form'>
          <button onClick={() => {
            setShowModal(false)
          }} className='crossbtn'>×</button>
          <FabricForm />
        </div>
      </>
    )
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
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>



      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Fabric</h1>
      <div className='Selfab_main'>
        <div className="file-upload-container fabric_main1">

          <span>
            <img src={upload} onClick={() => {
              setShowModal(true)
            }}/>
            <br />Upload Fabric Image <br />
          </span>
          <h3 className='fabric_main1-txt'>
          <h4>Add New Fabric</h4>
          </h3>
        </div>

        {showModal && <MyModel closeModal={closeModal}/>}

        {
          fabric.reverse().map(
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



      </div>

    </>
  )
}
















