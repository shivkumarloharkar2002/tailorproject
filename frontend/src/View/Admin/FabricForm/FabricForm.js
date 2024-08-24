import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './FabricForm.css'
import axios from 'axios';


export default function FabricForm() {

  const [ title , setTitle]= useState('');
  const [ color , setColor]= useState('');
  const [ price , setPrice]= useState('');
  const [ cloth_type , setClothType]= useState('');
  const [ fabric_type , setFabricType]= useState('');
  const [ pattern , setPattern]= useState('');
  const [ img1 , setImg] = useState('')

  const saveFabric = async (e)=>{
    e.preventDefault()
    try{
    const Fabricdata = await axios.post("http://localhost:5555/api/fabricroutes/addfabric" , {
      title:title ,
      color:color,
      price:price,
      cloth_type:cloth_type,
      fabric_type:fabric_type,
      pattern:pattern,
      img1:img1
    })
    console.log(Fabricdata)
    toast.success(Fabricdata.data.msg)
  }
  catch(e){
    console.log(e)
  }
  }
  return (
   <>
    <form className='Fabform_main'>
              <h1 className="center">Fabric</h1>
              
               <label className='fab_label'>Name </label>:
                <input type='text' placeholder='Fabric Name' className='fab_input'
                 onChange={(e)=>{
                  setTitle(e.target.value)
                }}
                /><br/>
                <label className='fab_label'>Color</label>:
                <input type='text' placeholder='Fabric Color'  className='fab_input' 
                onChange={(e)=>{
                  setColor(e.target.value)
                }}
                /><br/>
                <label className='fab_label'>Price</label>:
                <input type='number' placeholder='Fabric Price'  className='fab_input' 
                onChange={(e)=>{
                  setPrice(e.target.value)
                 }}
                 /><br/>
                  <label className='fab_label'>Fabric Type</label>:
                <input type='text' placeholder='Ex: Cotton'  className='fab_input' 
                onChange={(e)=>{
                  setFabricType(e.target.value)
                 }}
                 /><br/>
                 <label className='fab_label'>Cloth type</label>:
                <select className='select'
                  onChange={(e)=>{
                    setClothType(e.target.value)}
                  }>
                    <option value=" Choose Cloth" aria-disabled> Choose Cloth</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pant">Pant</option>
                    <option value="Kurta">Kurta</option>
                    <option value="Pyjama">Pyjama</option>
                    <option value="Safari">Safari</option>
                  </select><br/>
                  <label className='fab_label'>Pattern</label>:
                <select className='select'
                  onChange={(e)=>{
                    setPattern(e.target.value)}
                  }
                  >
                    <option value="Select Pattern" aria-disabled> Select Pattern</option>
                    <option value="Solid">Solid</option>
                    <option value="Checks">Checks</option>
                    <option value="Strips">Strips</option>
                    <option value="Prints">Prints</option>
                   
                  </select><br/>
                  <label className='fab_label '> Image </label>:
                <input type='file' placeholder='Fabric Image ' className='fab_input ' name='file'
                 onChange={(e)=>{
                  setImg(e.target.value)
                  console.log(e.target.value)
                }}
                /><br/>
                <button className='fab_btn'
                 onClick={saveFabric}>ADD</button> 
        </form>
        <ToastContainer />
   </>
  )
}
