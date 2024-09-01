import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Component/Header/Header';
import './Performance.css';
import sales from './sales.png';
import wallet from './wallet.png';
import recev from './recev.png';
import goods from './goods.png';
import back from './back.png';
import moment from 'moment';

export default function CombinedPerformance() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [allData, setAllData] = useState({});
  const [individualData, setIndividualData] = useState({});
  const [employeeDetails, setEmployeeDetails] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/userroutes/getallusers');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/orderroutes/getallorder');
        const data = response.data.data;

        // Calculate all employees' performance
        let totalAmount = 0;
        let todayAmount = 0;
        let totalPending = 0;
        let totalComplete = 0;
        let todayPending = 0;
        let todayComplete = 0;

        const today = moment().startOf('day');

        data.forEach((order) => {
          totalAmount += order.total || 0;

          if (order.status === 'pending') {
            totalPending += 1;
          } else if (order.status === 'complete') {
            totalComplete += 1;
          }

          if (moment(order.createdAt).isSame(today, 'day')) {
            todayAmount += order.total || 0;

            if (order.status === 'pending') {
              todayPending += 1;
            } else if (order.status === 'complete') {
              todayComplete += 1;
            }
          }
        });

        setAllData({
          amount: totalAmount,
          amountToday: todayAmount,
          totalPending,
          totalComplete,
          todayPending,
          todayComplete,
        });

        // Calculate selected employee's performance
        if (selectedEmployeeId) {
          if (selectedEmployeeId === 'all') {
            // Reset employee details if "All" is selected
            setEmployeeDetails({});
            return;
          }

          const userOrders = data.filter(order => order.user_id._id === selectedEmployeeId);

          let userTotalAmount = 0;
          let userTotalPending = 0;
          let userTotalComplete = 0;
          let userTodayAmount = 0;
          let userTodayPending = 0;
          let userTodayComplete = 0;

          const user = employees.find(emp => emp._id === selectedEmployeeId);
          setEmployeeDetails(user || {});

          userOrders.forEach((order) => {
            userTotalAmount += order.total || 0;

            if (order.status === 'pending') {
              userTotalPending += 1;
            } else if (order.status === 'complete') {
              userTotalComplete += 1;
            }

            if (moment(order.createdAt).isSame(today, 'day')) {
              userTodayAmount += order.total || 0;

              if (order.status === 'pending') {
                userTodayPending += 1;
              } else if (order.status === 'complete') {
                userTodayComplete += 1;
              }
            }
          });

          setIndividualData({
            userTotalAmount,
            userTotalPending,
            userTotalComplete,
            userTodayAmount,
            userTodayPending,
            userTodayComplete,
          });
        }
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchData();
  }, [selectedEmployeeId, employees]);

  return (
    <div>
      <Header />
      <div className="profile-back" onClick={() => window.history.back()}>
        <img src={back} alt="" className="profile-back-img" />
      </div>
      <p className="heading-about">Performance</p>

      {selectedEmployeeId ? (
        <div>
            <button onClick={() => setSelectedEmployeeId('')}> All Performance</button>
          <div className="employee-details">
            <p className="userPerformance-info-text">Name: {employeeDetails.username}</p>
            <p className="userPerformance-info-text">Email: {employeeDetails.email}</p>
            <p className="userPerformance-info-text">Phone: {employeeDetails.phone}</p>
            <p className="userPerformance-info-text">Role: {employeeDetails.role}</p>
          </div>

          <div className="performance-section">
            <div className="heading">
              <p className="numh">Today's Performance</p>
            </div>
            <div className="flexp">
              <div className="rpart">
                <img className="icon" src={sales} alt="Sales" />
                <p className="num">₹{individualData.userTodayAmount?.toFixed(2)}</p>
                <p className="numi">Total Sales</p>
              </div>
              <div className="jpart">
                <img className="icon" src={wallet} alt="Wallet" />
                <p className="num">₹{individualData.userTodayAmount?.toFixed(2)}</p>
                <p className="numi">Payments Received</p>
              </div>
              <div className="ppart">
                <img className="icon" src={recev} alt="Received" />
                <p className="num">{individualData.userTodayPending}</p>
                <p className="numi">Orders Received</p>
              </div>
              <div className="npart">
                <img className="icon" src={goods} alt="Goods" />
                <p className="num">{individualData.userTodayComplete}</p>
                <p className="numi">Orders Delivered</p>
              </div>
            </div>
            <div className="performance-section">
              <div className="heading">
                <p className="numh">Total Performance</p>
              </div>
              <div className="flexp">
                <div className="rpart">
                  <img className="icon" src={sales} alt="Sales" />
                  <p className="num">₹{individualData.userTotalAmount?.toFixed(2)}</p>
                  <p className="numi">Total Sales</p>
                </div>
                <div className="jpart">
                  <img className="icon" src={wallet} alt="Wallet" />
                  <p className="num">₹{individualData.userTotalAmount?.toFixed(2)}</p>
                  <p className="numi">Payments Received</p>
                </div>
                <div className="ppart">
                  <img className="icon" src={recev} alt="Received" />
                  <p className="num">{individualData.userTotalPending}</p>
                  <p className="numi">Orders Received</p>
                </div>
                <div className="npart">
                  <img className="icon" src={goods} alt="Goods" />
                  <p className="num">{individualData.userTotalComplete}</p>
                  <p className="numi">Orders Delivered</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <div>
          <div className="selector">
            <select
              value={selectedEmployeeId}
              onChange={(e) => setSelectedEmployeeId(e.target.value)}
            >
              <option value="">All</option>
              
              {employees.map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.username}
                </option>
              ))}
            </select>
          </div>

          <div className="performance-section">
            <div className="heading">
              <p className="numh">All Employees' Performance</p>
            </div>
            <div className="flexp">
              <div className="rpart">
                <img className="icon" src={sales} alt="Sales" />
                <p className="num">₹{allData.amount?.toFixed(2)}</p>
                <p className="numi">Total Sales</p>
              </div>
              <div className="jpart">
                <img className="icon" src={wallet} alt="Wallet" />
                <p className="num">₹{allData.amountToday?.toFixed(2)}</p>
                <p className="numi">Payments Received</p>
              </div>
              <div className="ppart">
                <img className="icon" src={recev} alt="Received" />
                <p className="num">{allData.todayPending}</p>
                <p className="numi">Orders Received</p>
              </div>
              <div className="npart">
                <img className="icon" src={goods} alt="Goods" />
                <p className="num">{allData.todayComplete}</p>
                <p className="numi">Orders Delivered</p>
              </div>
            </div>
            <div className="performance-section">
              <div className="heading">
                <p className="numh">Total Performance</p>
              </div>
              <div className="flexp">
                <div className="rpart">
                  <img className="icon" src={sales} alt="Sales" />
                  <p className="num">₹{allData.amount?.toFixed(2)}</p>
                  <p className="numi">Total Sales</p>
                </div>
                <div className="jpart">
                  <img className="icon" src={wallet} alt="Wallet" />
                  <p className="num">₹{allData.amount?.toFixed(2)}</p>
                  <p className="numi">Payments Received</p>
                </div>
                <div className="ppart">
                  <img className="icon" src={recev} alt="Received" />
                  <p className="num">{allData.totalPending}</p>
                  <p className="numi">Orders Received</p>
                </div>
                <div className="npart">
                  <img className="icon" src={goods} alt="Goods" />
                  <p className="num">{allData.totalComplete}</p>
                  <p className="numi">Orders Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
