import React from 'react'
import './Manage.css'
// import fabric from './'
import Gallery from './gallery.png'
import Header from '../../Component/Header/Header'
import { Link } from 'react-router-dom'

export default function Manage() {
  return (
    <>
      <Header />
      <div className='MMain'>

        <div className='ManageMain'>

          <Link className='link'>
            <div>
              {/* <img src={fabric}></img> */}
              <h4>Fabric</h4>
            </div>
          </Link>


          <Link className='link'>
            <div>
              <img src={Gallery} className='Mimg'></img>
              <h4> Gallery</h4>
            </div>
          </Link>

          <Link className='link'>
            <div>
              {/* <img src={fabric}></img> */}
              <h4>Readymade</h4>
            </div>
          </Link>
        </div>
      </div >

    </>
  )



}
