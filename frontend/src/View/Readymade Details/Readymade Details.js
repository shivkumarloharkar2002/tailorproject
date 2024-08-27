import React from 'react';
import suts from './suts.webp';
import './Ready.css';

export default function Ready() {
  return (
    <div className='ready-flex'>
      <img className='ready-img' src={suts}/>
      <div>
        <h2>Wholesale Safari Suit for Men To Add Class To Every Man's Wardrobe</h2>
        <p className='left-size'>Our safari suit is made from high-quality cotton fabric, ensuring comfort and durability.</p>
        
        <p className='left-size'>Available Sizes :- XS , S , M , L , XL , 2XL , 3XL .</p>
        <div>
        <p className='left-size'>Available Color :- </p>
        <div className='colo'>
        <div className='rcolor'></div>
        <div className='ncolor'></div>
        <div className='gcolor'></div>
        <div className='bcolor'></div>
        </div>
        </div>
        <p className='left-size'>100% Original Products
        Easy 14 days returns and exchanges .</p>
        <div className='butns'>
          <p className='bts'>Buy Now</p>
        </div>
      </div>
    </div>
  )
}
