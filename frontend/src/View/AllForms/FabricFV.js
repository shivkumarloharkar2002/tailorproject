import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './FabricFV.css'
import axios from 'axios';
import Header from '../../Component/Header/Header';


export default function FabricFV() {

  const [fabric, setFabric] = useState([]);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [cloth_type, setClothType] = useState('');
  const [fabric_type, setFabricType] = useState('');
  const [pattern, setPattern] = useState('');
  const [imgfile, setImg] = useState('')
  const [ id , setId] = useState('')
  const [edit, setEdit] = useState(false);




  const saveFabric = async (e) => {
    e.preventDefault();

    
    if (edit === true) {
      const updatedata = new FormData()
      updatedata.append('title', title); // 'title' is a field name
      updatedata.append('color', color); // 'color' is a field name
      updatedata.append('price', price); // 'price' is a field name
      updatedata.append('cloth_type', cloth_type); // 'cloth_type' is a field name
      updatedata.append('fabric_type', fabric_type); // 'fabric_type' is a field name
      updatedata.append('pattern', pattern); // 'pattern' is a field name
      updatedata.append('imgfile', imgfile);
      updatedata.append('id', id);

      try{
          const fabdata = await axios.put(
            `http://localhost:5555/api/fabricroutes/updatefabric/` , 
            updatedata,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );
          GetFabricdata();
          console.log(fabdata);
          toast.success("Updated successfully");
          
      }catch(error){
        toast.error(error)
      }
    }else{
      const formData = new FormData();
      formData.append('title', title); // 'title' is a field name
      formData.append('color', color); // 'color' is a field name
      formData.append('price', price); // 'price' is a field name
      formData.append('cloth_type', cloth_type); // 'cloth_type' is a field name
      formData.append('fabric_type', fabric_type); // 'fabric_type' is a field name
      formData.append('pattern', pattern); // 'pattern' is a field name
      formData.append('imgfile', imgfile); // 'img1' is a field name, and img1 is the file object
  
      try {
        const Fabricdata = await axios.post("http://localhost:5555/api/fabricroutes/addfabric",
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
            }
          }
        )
        console.log(Fabricdata)
        toast.success(Fabricdata.data.msg)
      }
      catch (e) {
        toast.error(e)
        console.log(e)
      }
      GetFabricdata();
    }
    }



    const Edit = async(data)=>{
     
      setTitle(data.title);
      setColor(data.color);
      setPrice(data.price);
      setClothType(data.cloth_type);
      setFabricType(data.fabric_type);
      setPattern(data.pattern);
      setImg(data.imgfile);
      setId(data._id)
      setEdit(true)
    }

 

  //fabric from the form

  const GetFabricdata = async () => {
    const fabricd = await axios.get('http://localhost:5555/api/fabricroutes/getallfabric');
    setFabric(fabricd.data.data)
    console.log(fabricd.data.data)
  }

  //delete fabric 

  const deleteFabric = async (data) => {
    const id = data._id;
    const deletedata = await axios.delete(`http://localhost:5555/api/fabricroutes/deletefabric/${id}`)
    toast.error(deletedata.data.msg)

    GetFabricdata();
  }

  useEffect(


    () => {
      GetFabricdata();
    }, []
  )
  return (

    <>
      <div className='addFabMain'>
        <Header />
        <form className='FabformFV_main' encType="multipart/form-data" method="post">
          <h1 className="center">Fabric</h1>

          <label className='fab_label'>Name </label>:
          <input type='text' placeholder='Fabric Name' className='fab_input' value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          /><br />
          <label className='fab_label'>Color</label>:
          <input type='text' placeholder='Fabric Color' className='fab_input' value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          /><br />
          <label className='fab_label'>Price</label>:
          <input type='number' placeholder='Fabric Price' className='fab_input' value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          /><br />
          <label className='fab_label'>Fabric Type</label>:
          <input type='text' placeholder='Ex: Cotton' className='fab_input' value={fabric_type}
            onChange={(e) => {
              setFabricType(e.target.value)
            }}
          /><br />
          <label className='fab_label'>Cloth type</label>:
          <select className='select'value={cloth_type}
            onChange={(e) => {
              setClothType(e.target.value)
            }
            }>
            <option value=" Choose Cloth" aria-disabled> Choose Cloth</option>
            <option value="shirt">Shirt</option>
            <option value="pant">Pant</option>
            <option value="kurta">Kurta</option>
            <option value="pyjama">Pyjama</option>
            <option value="safari">Safari</option>
          </select><br />
          <label className='fab_label'>Pattern</label>:
          <select className='select' value={pattern}
            onChange={(e) => {
              setPattern(e.target.value)
            }
            }
          >
            <option value="Select Pattern" aria-disabled> Select Pattern</option>
            <option value="solid">Solid</option>
            <option value="checks">Checks</option>
            <option value="strips">Strips</option>
            <option value="prints">Prints</option>

          </select><br />
          <label className='fab_label '> Image </label>:
          <input type='file' placeholder='Fabric Image ' className='fab_input ' name='imgfile'
            onChange={(e) => {
              setImg(e.target.files[0])
              console.log(e.target.files[0])
            }}
          />

{edit === false ? (<button className='Fab_btn'
            onClick={saveFabric}>Add</button>):(<button className='Fab_btn'
              onClick={saveFabric}>Update</button>)}

          
        </form>
        <div>
          <div className='Fabform_list  List_fab'>
            <h1 className="center">Fabric List</h1>
            {
              fabric.reverse().map(
                (data) => {
                  return (
                    <>
                      <div className='AFmain'>
                        <h2 style={{ padding: '0 20px' }}>{data.title}</h2>
                        <div className='AFDIV' >
                          <div>
                            <img src={data.img1} className='AFimg' />
                          </div>
                          <div className='AFinfo'>

                            <div className='AFcomponents'> <h5 className='AFh5'>Color: </h5><h4>{data.color}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Price: </h5><h4>{data.price}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Fabric type: </h5><h4>{data.fabric_type}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Pattern: </h5><h4>{data.pattern}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Cloth Type: </h5><h4>{data.cloth_type}</h4></div>
                          </div>
                        </div>
                        <div className="fabCard-btns">
                          <button
                      className="userCard-button edit"
                      onClick={() => {
                        Edit(data);
                      }}
                    >
                      Edit
                    </button>
                          <button
                            className="userCard-button delete"
                            onClick={
                              () => {
                                deleteFabric(data)
                              }
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )
                }
              )
            }
          </div>
        </div>





        <ToastContainer />
      </div>
    </>

  )
}
