import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

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
    <div>
      <h2>Update Status</h2>
      <select
        value={orderdata.status}
        onChange={(e) => {
          setStatus(e.target.value)
          console.log(e.target.value)
        }}
        className="status-dropdown"
      >
        <option value="pending">Pending</option>
        <option value="working">Working</option>
        <option value="complete">Complete</option>
      </select>
      <button onClick={handleStatusUpdate} className="updatebutton">Update Status</button>
      <button onClick={() => navigate(-1)} className="updatebutton">Cancel</button>

    </div >
  )
}
