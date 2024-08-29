import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update_status() {

  const { id } = useParams(); // Get the ID from the URL params
  const navigate = useNavigate(); // For navigation

  const [status, setStatus] = useState('Pending');

  const handleStatusUpdate = async () => {
    try {
      // Send the updated status to the server
      await axios.post('/api/update-status', { id, status });
      
      // Redirect back to the previous page
      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  return (
    <div>
      <p>.</p>
    <h2>Update Status</h2>
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="status-dropdown"
    >
      <option value="Pending">Pending</option>
      <option value="Working">Working</option>
      <option value="Complete">Complete</option>
    </select>
    <button onClick={handleStatusUpdate} className="update-button">Update Status</button>
    <button onClick={() => navigate(-1)} className="cancel-button">Cancel</button>
    
  </div>
  )
}
