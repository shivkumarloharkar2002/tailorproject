
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import { Link } from 'react-router-dom'
import back from '../../Image/back.jpg'

import './NextGallery.css'


export default function NextGalleryCard() {
    // get api used
    const { id } = useParams();

    const [galleryData, setGalleryData] = useState([]);

    let GetAllData = async () => {
        // pute the get api path
        let gallery = await axios.get('http://localhost:5555/api/gallaryroutes/getgalleryData');
        setGalleryData(gallery.data.data)
    }
    useEffect(
        () => {
            GetAllData();
        }, []
    )


    return (
        <>
            {
                galleryData.map((data) => {
                    if (data._id == id)
                        return (
                            <>
                                <Header />

                                <div className='backmain1'><Link to='/home'><img src={back} className='backimg' />Back</Link></div>

                                <div className='NCardM'>
                                    <div className='NSecond'>
                                        <div className='MDiv'>
                                            <img className='NIMG' src={data.img}></img>
                                        </div>

                                        <div className='MDiv'>
                                            <h1 className='GTITLE'>{data.title}</h1>
                                            <h3 className='Description'>{data.description}</h3>

                                            <h4>Color:-<span className='Span '> {data.color}</span></h4>
                                            <h4>Type:-<span className='Span t'>{data.cloth_type} </span></h4>

                                            <h4>Pattern:-<span className='Span p'>{data.pattern} </span></h4>
                                            <h4>Size:-<span className='Span s'>{data.size} </span></h4>
                                            <h4>Price:- <span className='Span pr'>₹ {data.price} /-</span></h4>

                                            <a href='/measurement'><button className='OrderB'>Order</button></a>
                                        </div>

                                    </div>

                                </div>
                            </>
                        )
                })
            }
        </>
    )
}
