import React from 'react'
import './SelectCategoryCard.css'

export default function SelectCategoryCard({ cimg, chead }) {
  return (
    <>
      <div className='category_main'>
        <img src={cimg} alt="category image" className='category_img' /><br />
        <h2 className='category_head'>{chead}</h2>
      </div>
    </>
  )
}
