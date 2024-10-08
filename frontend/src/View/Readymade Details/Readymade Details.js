import React, { useEffect, useState } from 'react';
import suts from './suts.webp';
import './Ready.css';
import axios from 'axios';
import Header from '../../Component/Header/Header';
import { useParams } from 'react-router-dom';
import back from '../../Image/back.png'
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosConfing';

export default function Ready() {

  const { id } = useParams();
  const [ReadyData, setReadyData] = useState([]);

  const GetReadydata = async () => {
    const readymade = await axiosInstance.get('readymaderoutes/getreadymadedata');
    setReadyData(readymade.data.data);
    console.log(readymade.data)
  }

  useEffect(
    () => {
      GetReadydata();
    }, []
  )
  console.log(ReadyData)
  return (
    <>

      {
        ReadyData.map((data) => {
          if (data._id == id)
            return (

              <>

                <Header />
                <Link to={"/readymade"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>

                <p className='heding-ready'>Details</p>
                <div className='ready-flex'>
                  <img className='ready-img' src={data.img} />
                  <div className='ready_space'>
                    <h2 className='ready-head'>{data.title}</h2>
                    <p className='left-size'>{data.des}</p>
                    <p className='left-size'>Sizes :-{data.size}</p>
                    <div>
                      <p className='left-size'>Color :- {data.color}</p>
                      {/* <div className='colo'>
        <div className='rcolor'></div>
        <div className='ncolor'></div>
        <div className='gcolor'></div>
        <div className='bcolor'></div>
        </div> */}

                    </div>
                    <p className='left-size'>{data.offer}</p>
                    <p className='left-size'> Price:-{data.price}</p>

                  </div>
                </div>
              </>

            )
        })
      }

    </>
  )
}
