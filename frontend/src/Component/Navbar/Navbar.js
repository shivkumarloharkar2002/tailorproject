import React from 'react'
import './Navbar.css'

function NavbarReady() {
  return (
  <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All Category</a>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link active" href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Shirts
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Apple</a></li>
            <li><a class="dropdown-item" href="#">Vanela </a></li>
            <li><a class="dropdown-item" href="#">Short</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active " href="#"  data-bs-toggle="dropdown" aria-expanded="false">
           Pants
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Narrow</a></li>
            <li><a class="dropdown-item" href="#">Simple</a></li>
            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kurta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pyjama</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Suit Safari</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link " href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link " href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default NavbarReady