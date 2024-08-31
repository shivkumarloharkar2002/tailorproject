
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


                                <Link to={"/gallery"} className="link">
                                    <div className="profile-back">
                                        <img src={back} alt="" className="profile-back-img" />
                                        {/* <h1 className="profile-back-text">Back</h1> */}
                                    </div>
                                </Link>

                                {/* <div className='backmain1'><Link to='/home'><img src={back} className='backimg' />Back</Link></div> */}

                                <p className='Heding-'>Details</p>

                                {/* new */}
                                <div className='Gallery-flex'>
                                    <img className='Gallery-img' src={data.img} />
                                    <div className='Gsecond'>
                                        <h2 className='Discription'>{data.title}</h2>
                                        <p className=' Gleft-size'>Dis:- {data.description}</p>
                                        {/* <p className='Gleft-size'>Des :-{data.des}</p> */}
                                        <p className='Gleft-size'>Sizes :-{data.size}</p>
                                        <div>
                                            <p className='Gleft-size'>Color :- {data.Color}</p>
                                        </div>
                                        <div>
                                            <p className='Gleft-size'>Pattern:- {data.pattern}</p>
                                        </div>
                                        
                                        <p className='Gleft-size'> Price:- ₹ {data.price}</p>

                                    </div>
                                </div>
                                {/* new */}


                            </>
                        )
                })
            }
            
        </>
    )
}
