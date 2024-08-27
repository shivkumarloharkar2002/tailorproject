import React from 'react'
import './Header.css'
import Nav from './logo.png'
import profile from './profile-user (1).png'

export default function Header() {
  return (
    <>
      <div className='Header fixed-top'>
        <div className='Heder_Disply'>
          <div>  <a href='/home'> <img className='nimg  ' src={Nav}></img></a></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className='Heder_next'>
            
            <a class=" active Header_Margin ncolor" aria-current="page" href="/home">Home</a>
            <a class="ncolor Header_Margin active" href="/about">About</a>
            <a class="ncolor Header_Margin active" href="/invoice">Invoice</a>
          
            <a href="/profile"> <img className='Header_Margin proImg' src={profile}></img></a>
          </div>
        </div>


      </div>

      {/* 

      
      <nav class="navbar navbar-expand-lg  justify-content-between mnav fixed-top">
        <div class="container-fluid ">

          <a href='/home'> <img className='nimg  ' src={Nav}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav   ">
              <li class="nav-item Heder_next ">
                <a class=" active ncolor" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item Heder_next">
                <a class="ncolor active" href="/about">About</a>
              </li>
              <li class="nav-item Heder_next">
                <a class="ncolor  active" href="/invoice">Invoice</a>
              </li>
              <li class="nav-item Heder_next ">
                <a href="/profile"> <img className='proImg' src={profile}></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}
