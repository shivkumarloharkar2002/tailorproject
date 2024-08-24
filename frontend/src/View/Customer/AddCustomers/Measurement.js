import React from 'react'
import './Measurement.css'
import collar from '../../../Image/collar.webp' 
import length from '../../../Image/fullLenght.webp' 
import sleeve from '../../../Image/sleeve.webp' 
import waist from '../../../Image/waist.webp' 
import cheast from '../../../Image/cheast.webp' 
import shoulder from '../../../Image/shoulder.webp' 
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'



export default function Measurement() {
  return (
    <>
     <header className='top_nav'><Header/></header>
     <div className='backmain'><Link to='/choosefabric'><img src={back} className='backimg'/>Back</Link></div>
    <div>
    <h1 style={{textAlign:'center'}}>Size</h1>
    <div >
        <div className='size_main' >
            <div className='size_subdiv'>
                <img src={collar} className='size_img'/><br/>
                <input type='number' placeholder='Collar Size / inch' className='size_input'/>
            </div>
            <div  className='size_subdiv'>
                <img src={length}  className='size_img'/><br/>
                <input  type='number' placeholder='Shirt Length / inch' className='size_input'/>
            </div>
            <div  className='size_subdiv'>
            <img src={sleeve}  className='size_img'/><br/>
            <input  type='number' placeholder='Sleeve Size / inch' className='size_input'/>
            </div>
{/*            
        </div>
        <div className='size_main'> */}
            <div className='size_subdiv'>
            <img src={cheast}  className='size_img'/><br/>
            <input  type='number' placeholder='Cheast Size/ inch' className='size_input'/>
            </div>
            <div className='size_subdiv'>
            <img src={waist}  className='size_img'/><br/>
            <input  type='number' placeholder='Waist Size / inch' className='size_input'/>
            </div>
            <div className='size_subdiv'>
            <img src={shoulder}  className='size_img'/><br/>
            <input  type='number' placeholder='Shoulder Size / inch' className='size_input'/>
            </div>
            
            </div>
            <Link to='/orderslip'><button className='size_btn'>Submit</button></Link>
            
    </div>
    </div>
    </>
  )
}
