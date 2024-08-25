import React from 'react'
import './Header.css'
import Nav from './logo.png'
import profile from './profile-user (1).png'

export default function Header() {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-light  mnav fixed-top">
        <div class="container-fluid ">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <img className='nimg  ' src={Nav}></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nmain  mx-5">
              <li class="nav-item  mx-5 fs-5 ">
                <a class=" active ncolor" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item  mx-5 fs-5">
                <a class="ncolor active" href="/about">About</a>
              </li>
              {/* <li class="nav-item  mx-5 fs-5">
                <a class="ncolor  active" href="/customerinfo">Contact</a>
              </li> */}
              <li class="nav-item  mx-5 fs-5">
                <a class="ncolor  active" href="/invoice">Invoice</a>
              </li>
              <li class="nav-item  mx-5 fs-5">
             <a href="/profile"> <img className='proImg' src={profile}></img></a>
              </li>


            </ul>
            {/* <form class="d-flex"> */}
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              {/* <a class="nav-link active" href="#">Login</a> */}
              {/* <button class=" ncolor mx-5 fs-5" href="#">Login</button> */}
              {/* <a class=" ncolor mx-5 fs-5 mt-2" href="#" >Login</a> */}

              {/* <a class=" nregistation fs-5" href="#" >Registation</a> */}
          

            {/* </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}
