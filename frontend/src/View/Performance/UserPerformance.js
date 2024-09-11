import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import "./Performance.css";
import sales from "./sales.png";
import wallet from "./wallet.png";
import recev from "./recev.png";
import goods from "./goods.png";
import back from "./back.png";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfing";

export default function Performance() {
  const [userTotalAmount, setUserTotalAmount] = useState(0);
  const [userTotalPending, setUserTotalPending] = useState(0);
  const [userTotalComplete, setUserTotalComplete] = useState(0);

  const [userTodayAmount, setUserTodayAmount] = useState(0);
  const [userTodayPending, setUserTodayPending] = useState(0);
  const [userTodayComplete, setUserTodayComplete] = useState(0);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();

  const { id } = useParams();
  const getData = async () => {
    console.log(id)
    try {
      const response = await axiosInstance.get(
        `orderroutes/getallorder`
      );
      const data = response.data.data;
      console.log(data)

      const userOrders = data.filter((order) => order.user_id._id === id);
      console.log(userOrders)

      let userTotalAmount = 0;
      let userTotalPending = 0;
      let userTotalComplete = 0;

      let userTodayAmount = 0;
      let userTodayPending = 0;
      let userTodayComplete = 0;

      const today = moment().startOf("day");

      userOrders.forEach((order) => {
        userTotalAmount += order.total || 0;

        setName(order.user_id.username)
        setEmail(order.user_id.email)
        setPhone(order.user_id.phone)
        setRole(order.user_id.role)

        if (order.status === "pending") {
          userTotalPending += 1;
        } else if (order.status === "complete") {
          userTotalComplete += 1;
        }

        if (moment(order.createdAt).isSame(today, "day")) {
          userTodayAmount += order.total || 0;

          if (order.status === "pending") {
            userTodayPending += 1;
          } else if (order.status === "complete") {
            userTodayComplete += 1;
          }
        }
      });

      setUserTotalAmount(userTotalAmount);
      setUserTotalPending(userTotalPending);
      setUserTotalComplete(userTotalComplete);

      setUserTodayAmount(userTodayAmount);
      setUserTodayPending(userTodayPending);
      setUserTodayComplete(userTodayComplete);
    } catch (error) {
      console.error("Error fetching user order data:", error);
    }
  };

  useEffect(() => {
    const userId = id;
    getData(userId);
  }, []);

  return (
    <div>
      <Header />
      <a href="/home">
        <img className="back-btn" src={back} alt="Back" />
      </a>

      <p className="heding-about">Performance</p>
      <div className="userPerformance-info">
        <p className="userPerformance-info-text">Name:{name}</p>
        <p className="userPerformance-info-text">Email:{email}</p>
        <p className="userPerformance-info-text">Phone:{phone}</p>
        <p className="userPerformance-info-text">Role:{role}</p>
      </div>




      <div className="parfom">
        <div className="hedi">
          <p className="numh">Today's Performance</p>
        </div>
        <div className="flexp">
          <div className="rpart">
            <img className="icon" src={sales} alt="Sales" />
            <p className="num">₹{userTodayAmount.toFixed(2)}</p>
            <p className="numi">Total Sales</p>
          </div>
          <div className="jpart">
            <img className="icon" src={wallet} alt="Wallet" />
            <p className="num">₹{userTodayAmount.toFixed(2)}</p>
            <p className="numi">Payments Received</p>
          </div>
          <div className="ppart">
            <img className="icon" src={recev} alt="Received" />
            <p className="num">{userTodayPending}</p>
            <p className="numi">Orders Received</p>
          </div>
          <div className="npart">
            <img className="icon" src={goods} alt="Goods" />
            <p className="num">{userTodayComplete}</p>
            <p className="numi">Orders Delivered</p>
          </div>
        </div>
      </div>

      <div className="parfom">
        <div className="hedi">
          <p className="numh">Total Performance</p>
        </div>
        <div className="flexp">
          <div className="rpart">
            <img className="icon" src={sales} alt="Sales" />
            <p className="num">₹{userTotalAmount.toFixed(2)}</p>
            <p className="numi">Total Sales</p>
          </div>
          <div className="jpart">
            <img className="icon" src={wallet} alt="Wallet" />
            <p className="num">₹{userTotalAmount.toFixed(2)}</p>
            <p className="numi">Payments Received</p>
          </div>
          <div className="ppart">
            <img className="icon" src={recev} alt="Received" />
            <p className="num">{userTotalPending}</p>
            <p className="numi">Orders Received</p>
          </div>
          <div className="npart">
            <img className="icon" src={goods} alt="Goods" />
            <p className="num">{userTotalComplete}</p>
            <p className="numi">Orders Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
