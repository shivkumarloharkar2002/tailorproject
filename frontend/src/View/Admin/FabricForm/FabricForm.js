import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './FabricForm.css'
import axios from 'axios';
import FabricAdminCard from '../../../Component/AdminCards/AddFabriccard/FabricAdminCard';


export default function FabricForm() {

  const [ fabric , setFabric] = useState([]);
  const [ title , setTitle]= useState('');
  const [ color , setColor]= useState('');
  const [ price , setPrice]= useState('');
  const [ cloth_type , setClothType]= useState('');
  const [ fabric_type , setFabricType]= useState('');
  const [ pattern , setPattern]= useState('');
  const [ imgfile , setImg] = useState('')

  const saveFabric = async (e)=>{
    e.preventDefault()

    const formData = new FormData();
    formData.append('title', title); // 'title' is a field name
    formData.append('color', color); // 'color' is a field name
    formData.append('price', price); // 'price' is a field name
    formData.append('cloth_type', cloth_type); // 'cloth_type' is a field name
    formData.append('fabric_type', fabric_type); // 'fabric_type' is a field name
    formData.append('pattern', pattern); // 'pattern' is a field name
    formData.append('imgfile', imgfile); // 'img1' is a field name, and img1 is the file object

    try{
    const Fabricdata = await axios.post("http://localhost:5555/api/fabricroutes/addfabric" , 
      // {
      // title:title ,
      // color:color,
      // price:price,
      // cloth_type:cloth_type,
      // fabric_type:fabric_type,
      // pattern:pattern,
      // img1:img1
    // },
    formData,
    {
      headers: {
          'Content-Type': 'multipart/form-data'
      }}
  )
    console.log(Fabricdata)
    toast.success(Fabricdata.data.msg)
  }
  catch(e){
    console.log(e)
  }
  }

  const GetFabricdata= async()=>{
    const fabricd =await axios.get('http://localhost:5555/api/fabricroutes/getallfabric');
    setFabric(fabricd.data.data)
    console.log(fabricd.data.data)
  }


  useEffect(
    ()=>{
      GetFabricdata();
    },[]
  )
  return (
   <div className='main_fab_form'>
   <div className='addFabMain'>
    <div>
    <form className='Fabform_main' encType="multipart/form-data" method="post">
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
                    <option value="shirt">Shirt</option>
                    <option value="pant">Pant</option>
                    <option value="kurta">Kurta</option>
                    <option value="pyjama">Pyjama</option>
                    <option value="safari">Safari</option>
                  </select><br/>
                  <label className='fab_label'>Pattern</label>:
                <select className='select'
                  onChange={(e)=>{
                    setPattern(e.target.value)}
                  }
                  >
                    <option value="Select Pattern" aria-disabled> Select Pattern</option>
                    <option value="solid">Solid</option>
                    <option value="checks">Checks</option>
                    <option value="strips">Strips</option>
                    <option value="prints">Prints</option>
                   
                  </select><br/>
                  <label className='fab_label '> Image </label>:
                <input type='file' placeholder='Fabric Image ' className='fab_input ' name='imgfile'
                 onChange={(e)=>{
                  setImg(e.target.files[0])
                  console.log(e.target.files[0])
                }}
                /><br/>
                <button className='fab_btn'
                 onClick={saveFabric}>ADD</button> 
        </form>
    </div>
    <div>
      <div className='Fabform_list  List_fab'>
        <h1 className="center">Fabric List</h1>
    {
      fabric.map(
        (data)=>{
          return(
            <>
             <FabricAdminCard title={data.title} color={data.color} price={data.price}  img1={data.img1} pattern={data.pattern} cloth_type={data.cloth_type} fabric_type={data.fabric_type}/>
            </>
          )
        }
      )
    }
      </div>
    </div>
   
   </div>
        <ToastContainer />
   </div>
  )
}
