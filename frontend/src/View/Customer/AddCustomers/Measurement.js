import React from 'react'
import './Measurement.css'
import collar from '../../../Image/collar.webp' 
import length from '../../../Image/fullLenght.webp' 
import sleeve from '../../../Image/sleeve.webp' 
import waist from '../../../Image/waist.webp' 
import cheast from '../../../Image/cheast.webp' 
import shoulder from '../../../Image/shoulder.webp' 




export default function Measurement() {
  return (
    <>
     <header className='top_nav'></header>
    <div>
    <h1 style={{textAlign:'center'}}>Size</h1>
    <div >
        <div className='size_main' >
            <div >
                <img src={collar} className='size_img'/><br/>
                <input type='number' placeholder='Collar Size' className='size_input'/>
            </div>
            <div>
                <img src={length}  className='size_img'/><br/>
                <input  type='number' placeholder='Shirt Length' className='size_input'/>
            </div>
            <div>
            <img src={sleeve}  className='size_img'/><br/>
            <input  type='number' placeholder='Sleeve Size' className='size_input'/>
            </div>
           
        </div>
        <div className='size_main'>
            <div>
            <img src={cheast}  className='size_img'/><br/>
            <input  type='number' placeholder='Cheast Size' className='size_input'/>
            </div>
            <div>
            <img src={waist}  className='size_img'/><br/>
            <input  type='number' placeholder='Waist Size' className='size_input'/>
            </div>
            <div>
            <img src={shoulder}  className='size_img'/><br/>
            <input  type='number' placeholder='Shoulder Size' className='size_input'/>
            </div>
            </div>
    </div>
    </div>
    </>
  )
}
