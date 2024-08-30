import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Assign.css";
import Header from '../../Component/Header/Header';

export default function Update_status() {

  const { id } = useParams(); // Get the ID from the URL params
  const navigate = useNavigate(); // For navigation

  const [status, setStatus] = useState('pending');


  const [orderdata, setorderdata] = useState({})
  const Getorderdata = async () => {
    const order= await axios.get('http://localhost:5555/api/orderroutes/getallorder');
    const orderd = order.data.data
    console.log(orderd);

    const oneorder = orderd.filter((data) => data._id === id);

    setorderdata(oneorder[0]);
    console.log("order", oneorder[0]);
  }

  useEffect(
    () => {
        Getorderdata()
    }, []
)

  const handleStatusUpdate = async () => {
    try {
      const update = await axios.put("http://localhost:5555/api/orderroutes/updateorderstatus", { id, status })
      console.log(update)

      // Redirect back to the previous page
      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };



  return (
    <div className='update-all'>
      <Header/>
      
      <h2 className='heding-update'>Update Status</h2>
      <div className='update-box'>
      <select
        value={orderdata.status}
        onChange={(e) => {
          setStatus(e.target.value)
          console.log(e.target.value)
        }}
        className="status-drop"
      >
        <option value="pending">Pending</option>
        <option value="working">Working</option>
        <option value="complete">Complete</option>
      </select><br/>
      <button onClick={handleStatusUpdate} className="update-btn">Update Status</button>
      <button onClick={() => navigate(-1)} className="update-btns">Cancel</button>
      </div>
    </div >
  )
}
