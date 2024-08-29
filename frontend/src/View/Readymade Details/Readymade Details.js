import React, { useEffect, useState } from 'react';
import suts from './suts.webp';
import './Ready.css';
import axios from 'axios';
import Header from '../../Component/Header/Header';
import { useParams } from 'react-router-dom';

export default function Ready() {

  const {id} = useParams();
  const [ReadyData, setReadyData] = useState([]);

  const GetReadydata = async () => {
    const readymade = await axios.get('http://localhost:5555/api/readymaderoutes/getreadymadedata');
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
        if(data._id ==id)
          return(
        
        <>
        
         <Header/>
        <p className='heding-ready'>Details</p>
    <div className='ready-flex'>
      <img className='ready-img' src={data.img}/>
      <div>
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
        <div className='butns'>
          <p className='bts'>Buy Now</p>
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
