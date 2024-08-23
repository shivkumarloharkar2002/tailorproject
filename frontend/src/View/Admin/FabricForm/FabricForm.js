import React from 'react'
import './FabricForm.css'

export default function FabricForm() {
  return (
   <>
    <form className='Fabform_main'>
              <h1 className="center">Fabric</h1>
                <label className='fab_label'> Image </label>:
                <input type='text' placeholder='Fabric Image ' className='fab_input'
                //  onChange={(e)=>{
                //   setImg(e.target.value)
                // }}
                /><br/>
               <label className='fab_label'>Name </label>:
                <input type='text' placeholder='Fabric Name' className='fab_input'
                //  onChange={(e)=>{
                //   setname(e.target.value)
                // }}
                /><br/>
                <label className='fab_label'>Color</label>:
                <input type='text' placeholder='Fabric Color'  className='fab_input' 
                // onChange={(e)=>{
                //   setcolor(e.target.value)
                // }}
                /><br/>
                <label className='fab_label'>Price</label>:
                <input type='number' placeholder='Fabric Price'  className='fab_input' 
                // onChange={(e)=>{
                //   setPrice(e.target.value)
                //  }}
                 /><br/>
                  <label className='fab_label'>Fabric Type</label>:
                <input type='text' placeholder='Ex: Cotton'  className='fab_input' 
                // onChange={(e)=>{
                //   setFtype(e.target.value)
                //  }}
                 /><br/>
                 <label className='fab_label'>Cloth type</label>:
                <select className='select'
                //   onChange={(e)=>{
                //     setCloth(e.target.value)}
                //   }
                  >
                    <option value=" Choose Cloth" aria-disabled> Choose Cloth</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pant">Pant</option>
                    <option value="Kurta">Kurta</option>
                    <option value="Pyjama">Pyjama</option>
                    <option value="Safari">Safari</option>
                  </select><br/>
                  <label className='fab_label'>Pattern</label>:
                <select className='select'
                //   onChange={(e)=>{
                //     setPattern(e.target.value)}
                //   }
                  >
                    <option value="Select Pattern" aria-disabled> Select Pattern</option>
                    <option value="Solid">Shirt</option>
                    <option value="Checks">Pant</option>
                    <option value="Strips">Kurta</option>
                    <option value="Prints">Pyjama</option>
                    <option value="Safari">Safari</option>
                  </select><br/>
                <button className='fab_btn'
                //  onClick={savefab}
                 >ADD</button> 
        </form>
   </>
  )
}
