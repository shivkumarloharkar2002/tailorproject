import './ReadymadeFV.css'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import Header from '../../Component/Header/Header';
import { Link } from 'react-router-dom';
import back from '../../Image/back.png'



export default function ReadymadeFV() {

    const [ readymade , setReadymade] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [cloth_type, setCloth_type] = useState('');
    const [pattern, setPattern] = useState('');
    const [size, setSize] = useState('');
    const [des, setDes] = useState('');
    const [offer, setOffer] = useState('');
    const [readymade_img, setImg] = useState('')

    const saveReadymade = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('color', color);
        formData.append('cloth_type', cloth_type);
        formData.append('pattern', pattern);
        formData.append('size', size);
        formData.append('des', des);
        formData.append('offer', offer);
        formData.append('readymade_img', readymade_img);
        try {
            const CreateReadymadeData = await axios.post('http://localhost:5555/api/readymaderoutes/addreadymade',
                // {
                //     "title": title,
                //     "img": img,
                //     "price": price,
                //     "color": color,
                //     "cloth_type": cloth_type,
                //     "pattern": pattern,
                //     "size": size,
                //     "description": description
                // }+++
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            console.log(CreateReadymadeData)
            toast.success(CreateReadymadeData.data.msg)
        }
        catch (e) {
            console.log(e)
        }
    }


    const GetReadydata = async () => {
        const readymaded = await axios.get('http://localhost:5555/api/readymaderoutes/getreadymadedata');
        setReadymade(readymaded.data.data)
        console.log(readymaded.data.data)
      }
    
      //delete fabric 
    
      const deletecloth = async (data) => {
        const id = data._id;
        const deletedata = await axios.delete(`http://localhost:5555/api/${id}`)
        toast.error(deletedata.data.msg)
    
        GetReadydata();
      }


      useEffect(
        ()=>{
            GetReadydata();
        },[]
      )
    return (
        <>
            <Header />
            <div className='addFabMain'>
            <Link to={"/readymade"} className="link">
                <div style={{ margin: '130px 0 0 10px' }}>
                    <img src={back} alt="" className="Profile-back-img" /><br></br>
                    {/* <h5 className="profile-back-text">Back</h5> */}
                </div>
            </Link>

            <form className='FabformFV_main'>
                <h1 className="center">Add Readymade Cloths</h1>



                <label className='fab_label'>Name</label>:
                <input type='text' placeholder='Cloth  Name ' className='fab_input' onChange={(e) => {
                    setTitle(e.target.value)
                }} /><br />



                <label className='fab_label'>Description</label>:
                <input type='text' placeholder='Description ' className='fab_input' onChange={(e) => {
                    setDes(e.target.value)
                }} /><br />

                <label className='fab_label'>Price</label>:
                <input type='text' placeholder='Img Price ' className='fab_input' onChange={(e) => {
                    setPrice(e.target.value)
                }} /><br />

                <label className='fab_label'>Color</label>:
                <input type='text' placeholder='Img Color ' className='fab_input' onChange={(e) => {
                    setColor(e.target.value)
                }} /><br />

                <label className='fab_label'>Offer</label>:
                <input type='text' placeholder='Offers  ' className='fab_input' onChange={(e) => {
                    setOffer(e.target.value)
                }} /><br />

                <label className='fab_label'>Cloth Type</label>:
                <select className='select'
                    onChange={(e) => {
                        setCloth_type(e.target.value)
                    }
                    }>
                    <option value="Select cloth_type" aria-disabled>  Select Cloth Type</option>
                    <option value="shirt">Shirt</option>
                    <option value="pant">Pant</option>
                    <option value="kurta">Kurta</option>
                    <option value="pyjama">Pyjama</option>
                    <option value="safari">Safari</option>

                </select><br />

                <label className='fab_label'>Pattern</label>:
                <select className='select'
                    onChange={(e) => {
                        setPattern(e.target.value)
                    }
                    }>
                    <option value="Select Pattern" aria-disabled>  Select Pattern</option>
                    <option value="solid">Solid</option>
                    <option value="checks">Checks</option>
                    <option value="strips">Strips</option>
                    <option value="prints">Prints</option>
                </select><br />

                <label className='fab_label'>Size</label>:
                <select className='select'
                    onChange={(e) => {
                        setSize(e.target.value)
                    }
                    }>
                    <option value="Select Size" aria-disabled>  Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>

                </select><br />

                <label className='fab_label'>Image</label>:
                <input type='file' placeholder='Image url ' className='fab_input' onChange={(e) => {
                    setImg(e.target.files[0])
                }} /><br />

                {/* <input type='file'/> */}

                <button className='Fab_btn' onClick={saveReadymade}>ADD</button>


            </form>

            <div>
          <div className='Fabform_list  List_fab'>
            <h1 className="center">Readymade List</h1>
            {
              readymade.reverse().map(
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
                          {/* <button
                      className="userCard-button edit"
                    >
                      Edit
                    </button> */}
                          <button
                            className="userCard-button delete"
                            onClick={
                              () => {
                                deletecloth(data)
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
        </div>
            <ToastContainer />
        </>
    )
}
