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
    const [readymade_img, setImg] = useState('');
    const [ id , setId] = useState('')
    const [edit, setEdit] = useState(false);



    const saveReadymade = async (e) => {
        e.preventDefault()

        if (edit === true) {
          const updatedata = new FormData()
          updatedata.append('title', title);
          updatedata.append('price', price);
          updatedata.append('color', color);
          updatedata.append('cloth_type', cloth_type);
          updatedata.append('pattern', pattern);
          updatedata.append('size', size);
          updatedata.append('des', des);
          updatedata.append('offer', offer);
          updatedata.append('readymade_img', readymade_img);
          updatedata.append('id', id);


          try{
            const updateready = await axios.put(
              `http://localhost:5555/api/readymaderoutes/updatereadymade/`,
              updatedata,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            )
            GetReadydata();
            console.log(updateready);
            toast.success("Updated successfully");
          }catch(error){
            toast.error(error)
          }
        }else{
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
          toast.error(e)
            console.log(e)
        }
        GetReadydata()
    }
  }

    const Edit = async(data)=>{
     
      setTitle(data.title);
      setColor(data.color);
      setPrice(data.price);
      setCloth_type(data.cloth_type);
      setPattern(data.pattern);
      setSize(data.size);
      setDes(data.des);
      setOffer(data.offer);
      setImg(data.readymade_img);
      setId(data._id)
      setEdit(true)
    }

    const GetReadydata = async () => {
        const readymaded = await axios.get('http://localhost:5555/api/readymaderoutes/getreadymadedata');
        setReadymade(readymaded.data.data)
        console.log(readymaded.data.data)
      }
    
      //delete fabric 
    
      const deletecloth = async (data) => {
        const id = data._id;
        const deletedata = await axios.delete(`http://localhost:5555/api/readymaderoutes/deletereadymade/${id}`)
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
            <Link to={"/manage"} className="link">
                <div style={{ margin: '130px 0 -130px 10px' }}>
                    <img src={back} alt="" className="Profile-back-img" /><br></br>
                    {/* <h5 className="profile-back-text">Back</h5> */}
                </div>
            </Link>

            <form className='FabformFV_main'>
                <h1 className="center">Add Readymade Cloths</h1>



                <label className='fab_label'>Name</label>:
                <input type='text' placeholder='Cloth  Name ' value={title} className='fab_input' onChange={(e) => {
                    setTitle(e.target.value)
                }} /><br />



                <label className='fab_label'>Description</label>:
                <input type='text' placeholder='Description ' value={des} className='fab_input' onChange={(e) => {
                    setDes(e.target.value)
                }} /><br />

                <label className='fab_label'>Price</label>:
                <input type='text' placeholder='Img Price ' value={price} className='fab_input' onChange={(e) => {
                    setPrice(e.target.value)
                }} /><br />

                <label className='fab_label'>Color</label>:
                <input type='text' placeholder='Img Color ' value={color} className='fab_input' onChange={(e) => {
                    setColor(e.target.value)
                }} /><br />

                <label className='fab_label'>Offer</label>:
                <input type='text' placeholder='Offers' value={offer} className='fab_input' onChange={(e) => {
                    setOffer(e.target.value)
                }} /><br />

                <label className='fab_label'>Cloth Type</label>:
                <select className='select' value={cloth_type}
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
                <select className='select' value={pattern}
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
                <select className='select' value={size}
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

                
{edit === false ? (<button className='Fab_btn'
            onClick={saveReadymade}>Add</button>):(<button className='Fab_btn'
              onClick={saveReadymade}>Update</button>)}

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
                            <img src={data.img} className='AFimg' />
                          </div>
                          <div className='AFinfo'>

                            <div className='AFcomponents'> <h5 className='AFh5'>Color: </h5><h4 className='AFh4'>{data.color}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Price: </h5><h4 className='AFh4'>{data.price}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Size: </h5><h4 className='AFh4'>{data.size}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Pattern: </h5><h4 className='AFh4'>{data.pattern}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Cloth Type: </h5><h4 className='AFh4'>{data.cloth_type}</h4></div>
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
                            className="userCard-button remove"
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
