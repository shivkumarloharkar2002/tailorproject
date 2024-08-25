import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "./GalleryForm.css"
import React, { useState } from 'react'
import Header from '../../Component/Header/Header'

export default function GalleryForm() {


    const [imgname, setImgname] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [cloth_type, setCloth_type] = useState('')
    const [pattern, setPattern] = useState('')
    const [size, setSize] = useState('')

    const saveGallery = async () => {

        const CreateGalleryData = await axios.post('http://localhost:5555/api/gallaryroutes/addgallery', {
            "imgname": imgname,
            "price": price,
            "color": color,
            "cloth_type": cloth_type,
            "pattern": pattern,
            "size": size
        })
        console.log(CreateGalleryData)
        toast.success(CreateGalleryData.data.msg)
    }




    return (
        <>
            {/* <Header /> */}
            <form className='Fabform_main'>
                <h1 className="center">Add Gallery</h1>


                {/* <label className='fab_label'>Img Name </label>:
                <input type='text' placeholder='Img Name ' className='fab_input' onChange={(e) => {
                    setImgname(e.target.value)
                }} /><br /> */}

                <label className='fab_label'>Price </label>:
                <input type='text' placeholder='Img Price ' className='fab_input' onChange={(e) => {
                    setPrice(e.target.value)
                }} /><br />

                <label className='fab_label'>Color </label>:
                <input type='text' placeholder='Img Color ' className='fab_input' onChange={(e) => {
                    setColor(e.target.value)
                }} /><br />

                <label className='fab_label'>Cloth_type</label>:
                <select className='select'
                    onChange={(e) => {
                        setCloth_type(e.target.value)
                    }
                    }>
                    <option value="Select cloth_type" aria-disabled>  Select cloth_type</option>
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
                    <option value="solide">Solide</option>
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
                
                {/* <input type='file'/> */}

                <button className='fab_btn' onClick={saveGallery}>ADD</button>


            </form>
            <ToastContainer />
        </>
    )
}
