import axios from 'axios';
import './FabricFV.css'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../../Component/Header/Header';


export default function GalleryFV() {

    const [gallery, setGallery] = useState([])

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [Color, setColor] = useState('');
    const [cloth_type, setCloth_type] = useState('');
    const [pattern, setPattern] = useState('');
    const [size, setSize] = useState('');
    const [description, setDescription] = useState('');
    const [gallery_img, setImg] = useState('')
    const [id, setId] = useState('')

    const [edit, setEdit] = useState(false);


    const saveGallery = async (e) => {
        e.preventDefault()


        if (edit === true) {
            const updateformData = new FormData();

            updateformData.append('title', title);
            updateformData.append('price', price);
            updateformData.append('Color', Color);
            updateformData.append('cloth_type', cloth_type);
            updateformData.append('pattern', pattern);
            updateformData.append('size', size);
            updateformData.append('description', description);
            updateformData.append('gallery_img', gallery_img);
            updateformData.append('id', id)


            try {
                const formdata = await axios.put(`http://localhost:5555/api/gallaryroutes/updateGallery`, updateformData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );
                // get api stored in thise variable
                GetGalleryData();
                console.log(formdata)
                toast.success("Updated successfully");

            }
            catch (e) {
                toast.error(e)
            }

        }
        else {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('price', price);
            formData.append('Color', Color);
            formData.append('cloth_type', cloth_type);
            formData.append('pattern', pattern);
            formData.append('size', size);
            formData.append('description', description);
            formData.append('gallery_img', gallery_img);

            try {
                const gallerydata = await axios.post('http://localhost:5555/api/gallaryroutes/addgallery', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                console.log(gallerydata)
                toast.success(gallerydata.data.msg)

            }
            catch (e) {
                toast.error(e)
                console.log(e)
            }
            // get api stored in thise variable
            GetGalleryData();
        }
    }

    const Edit = async (data) => {

        setTitle(data.title);
        setPrice(data.price);
        setColor(data.Color);
        setCloth_type(data.cloth_type);
        setPattern(data.pattern);
        setDescription(data.description);
        setSize(data.size);
        setImg(data.gallery_img);
        setId(data._id)
        setEdit(true)

    }

    // get api
    let GetGalleryData = async () => {
        let gallery = await axios.get('http://localhost:5555/api/gallaryroutes/getgalleryData');
        setGallery(gallery.data.data)
        console.log(gallery.data.data)
    }


    //   delete api
    const deletedata = async (data) => {
        const id = data._id;
        const deleteGdata = await axios.delete(`http://localhost:5555/api/gallaryroutes/deleteGallery /${id}`)
        toast.error(deleteGdata.data.msg)

        // get api stored in thise variable
        GetGalleryData();
    }
    useEffect(
        ()=>{
            GetGalleryData(); 
        }
    )

    return (
        <>

<div className='addFabMain'>
        <Header />
        <form className='FabformFV_main' encType="multipart/form-data" method="post">
          <h1 className="center">Gallery</h1>

          <label className='fab_label'>Name </label>:
          <input type='text' placeholder='Fabric Name' className='fab_input' value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
          /><br />
          <label className='fab_label'>Color</label>:
          <input type='text' placeholder='Fabric Color' className='fab_input' value={Color}
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

          <label className='fab_label'>Description</label>:
          <input type='text' placeholder='Ex: Cotton' className='fab_input' value={description}
            onChange={(e) => {
                setDescription(e.target.value)
            }}
          />
          <br />
          <label className='fab_label'>Cloth type</label>:
          <select className='select'value={cloth_type}
            onChange={(e) => {
                setCloth_type(e.target.value)
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
            //   console.log(e.target.files[0])
            }}
          />

{edit === false ? (<button className='Fab_btn'
            onClick={saveGallery}>Add</button>):(<button className='Fab_btn'
              onClick={saveGallery}>Update</button>)}

          
        </form>



        <div>
          <div className='Fabform_list  List_fab'>
            <h1 className="center">Gallery List</h1>
            {
              gallery.reverse().map(
                (data) => {
                  return (
                    <>
                      <div className='AFmain'>
                        <h2 style={{ padding: '0 20px' }}>{data.title}</h2>
                        <div className='AFDIV' >
                          <div>
                            <img src={data.gallery_img} className='AFimg' />
                          </div>
                          <div className='AFinfo'>

                            <div className='AFcomponents'> <h5 className='AFh5'>Color: </h5><h4>{data.Color}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Price: </h5><h4>{data.price}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Size: </h5><h4>{data.size}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Pattern: </h5><h4>{data.pattern}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Cloth Type: </h5><h4>{data.cloth_type}</h4></div>
                            {/* <div className='AFcomponents'> <h5 className='AFh5'>Description: </h5><h4>{data.description}</h4></div> */}

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
                                deletedata(data)
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
