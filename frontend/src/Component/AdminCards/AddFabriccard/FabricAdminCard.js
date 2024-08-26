import React from 'react'
import './FabricAdminCard.css'



export default function FabricAdminCard({title , color , img1 , price , pattern , cloth_type , fabric_type }) {
  return (
    <>
   
<div className='AFmain'>
<h2 style={{padding:'0 20px'}}>{title}</h2>
<div style={{display:'flex'}} >
        <div>
            <img src={img1} className='AFimg'/>
        </div>
        <div className='AFinfo'>
         
           <div className='AFcomponents'> <h5 className='AFh5'>Color: </h5><h4>{color}</h4></div>
           <div className='AFcomponents'> <h5 className='AFh5'>Price: </h5><h4>{price}</h4></div>
           <div className='AFcomponents'> <h5 className='AFh5'>Fabric type: </h5><h4>{fabric_type}</h4></div>
           <div className='AFcomponents'> <h5 className='AFh5'>Pattern: </h5><h4>{pattern}</h4></div>
           <div className='AFcomponents'> <h5 className='AFh5'>Cloth Type: </h5><h4>{cloth_type}</h4></div>
    </div>
    </div>
    {/* <div className="fabCard-btns">
                    <button
                      className="userCard-button edit"
                    >
                      Edit
                    </button>
                    <button
                      className="userCard-button remove"
                      >
                      Delete
                    </button>
                  </div> */}
</div>
    </>
  )
}
