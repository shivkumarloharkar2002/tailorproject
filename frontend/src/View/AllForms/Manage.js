import React from 'react'
import './Manage.css'
// import fabric from './'
import Gallery from './gallery.png'
import Header from '../../Component/Header/Header'
import { Link } from 'react-router-dom'
import fabric from '../../Image/fabric.png'
import ready from '../../Image/ready.png'
import back from '../../Image/back.png'

export default function Manage() {
  return (
    <>
      <Header />
      <Link to={"/home"} className="link">
                <div style={{ margin: '130px 0 0 10px' }}>
                    <img src={back} alt="" className="Profile-back-img" /><br></br>
                    {/* <h5 className="profile-back-text">Back</h5> */}
                </div>
            </Link>

            <h1 style={{textAlign:'center' , margin:'20px 0 40px 0'}}>Upload Data</h1>
      <div className='MMain'>

        <div className='ManageMain'>

          <Link to={'/fabricdetails'} className='link'>
            <div className='managecard'>
              <img src={fabric} className='Mimg'></img>
              <h4 className='manage_head'>Fabric</h4>
            </div>
          </Link>


          <Link to={'/gallerydetails'} className='link'>
            <div className='managecard'>
              <img src={Gallery} className='Mimg'></img>
              <h4 className='manage_head'> Gallery</h4>
            </div>
          </Link>

          <Link to={'/readymadedetails'} className='link'>
            <div className='managecard'>
              <img src={ready} className='Mimg'></img>
              <h4 className='manage_head'>Readymade</h4>
            </div>
          </Link>
        </div>
      </div >

    </>
  )



}
