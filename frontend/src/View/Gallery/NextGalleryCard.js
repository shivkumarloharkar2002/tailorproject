
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../Component/Header/Header';


export default function NextGalleryCard() {
    // get api used
    const { id } = useParams();
    const [galleryData, setGalleryData] = useState([]);

    let GetAllData = async () => {
        // pute the get api path
        let gallery = await axios.get('http://localhost:5555/api/gallaryroutes/getgalleryData');
        setGalleryData(gallery.data)
    }
    useEffect(
        () => {
            GetAllData();
        }, []
    )


    return(
        <>
        {
          galleryData.map((data)=>{
            if (data._id == id)
                return(
            <>
            <Header/>

            <div>
                <img src={data.img}></img>
                <h1>{data.imgname}</h1>
                <h3>{data.price}</h3>
                <h3>{data.color}</h3>
                <h3>{data.cloth_type}</h3>
                <h3>{data.pattern}</h3>
                <h3>{data.size}</h3>


            </div>
            </>
            )
          })  
        }
        </>
    )
}
