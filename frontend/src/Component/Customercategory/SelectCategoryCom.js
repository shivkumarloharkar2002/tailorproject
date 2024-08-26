import React, { useState } from 'react'
import './SelectCategory.css'
import SelectCategoryCard from '../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import shirts from '../../Image/shirt.jpg'
import pants from '../../Image/pant.png'
import pyjama from '../../Image/pyjamas.jpg'
import safari from '../../Image/safaris.gif'
import kurtas from '../../Image/kurta.jpg'
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

function SelectCategoryCom() {

  let [category, setCategory] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    if (category) {
      localStorage.setItem("cloth", category);
      console.log('Category stored in localStorage:', category);
      navigate("/choosefabric");
    }
  }, [category]);

  return (
    <>

      <h1 className='center'>Cloths Category</h1>
      <div className='select_cat_main'>


        <div className='category_main' onClick={() => {
          setCategory("shirt");
        }}>
          <img src={shirts} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>shirts</h2>
        </div>

        <div className='category_main' onClick={() => {
          setCategory("pant");
        }}>
          <img src={pants} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Pant</h2>
        </div>


        <div className='category_main' onClick={() => {
          setCategory("kurta");
        }}>
          <img src={kurtas} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Kurta</h2>
        </div>

        <div className='category_main' onClick={() => {
          setCategory("payjama");
        }}>
          <img src={pyjama} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Payjama</h2>
        </div>


        <div className='category_main' onClick={() => {
          setCategory("Safari");
        }}>
          <img src={safari} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Suit Safari</h2>
        </div>





      </div>
    </>
  )
}

export default SelectCategoryCom