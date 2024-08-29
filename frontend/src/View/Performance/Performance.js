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

export default function Performance() {
  const [amount, setAmount] = useState(0);
  const [amountToday, setAmountToday] = useState(0);

  const [totalPending, setTotalPending] = useState(0);
  const [totalComplete, setTotalComplete] = useState(0);

  const [todayPending, setTodayPending] = useState(0);
  const [todayComplete, setTodayComplete] = useState(0);

  const [getAllData, setGetAllData] = useState([]);

  // Fetch all orders from the server
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5555/api/orderroutes/getallorder`
      );
      const data = response.data.data;
      setGetAllData(data);

      // Calculate total and today’s data
      let totalAmount = 0;
      let todayAmount = 0;

      let totalPendingCount = 0;
      let totalCompleteCount = 0;

      let todayPendingCount = 0;
      let todayCompleteCount = 0;

      const today = moment().startOf("day");

      data.forEach((order) => {
        // Calculate total sales
        totalAmount += order.total || 0;

        // Calculate order counts based on status
        if (order.status === "pending") {
          totalPendingCount += 1;
        } else if (order.status === "complete") {
          totalCompleteCount += 1;
        }

        // Calculate today's orders
        if (moment(order.createdAt).isSame(today, "day")) {
          todayAmount += order.total || 0;

          if (order.status === "pending") {
            todayPendingCount += 1;
          } else if (order.status === "complete") {
            todayCompleteCount += 1;
          }
        }
      });

      // Update state
      setAmount(totalAmount);
      setTotalPending(totalPendingCount);
      setTotalComplete(totalCompleteCount);

      setAmountToday(todayAmount);
      setTodayPending(todayPendingCount);
      setTodayComplete(todayCompleteCount);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <a href="/home">
        <img className="back-btn" src={back} alt="Back" />
      </a>
      <p className="heding-about">Performance</p>
      <div className="parfom">
        <div className="hedi">
          <p className="numh">Today's Performance</p>
        </div>
        <div className="flexp">
          <div className="rpart">
            <img className="icon" src={sales} alt="Sales" />
            <p className="num">₹{amountToday.toFixed(2)}</p>
            <p className="numi">Total Sales</p>
          </div>
          <div className="jpart">
            <img className="icon" src={wallet} alt="Wallet" />
            <p className="num">₹{amountToday.toFixed(2)}</p>
            <p className="numi">Payments Received</p>
          </div>
          <div className="ppart">
            <img className="icon" src={recev} alt="Received" />
            <p className="num">{todayPending}</p>
            <p className="numi">Orders Received</p>
          </div>
          <div className="npart">
            <img className="icon" src={goods} alt="Goods" />
            <p className="num">{todayComplete}</p>
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
            <p className="num">₹{amount.toFixed(2)}</p>
            <p className="numi">Total Sales</p>
          </div>
          <div className="jpart">
            <img className="icon" src={wallet} alt="Wallet" />
            <p className="num">₹{amount.toFixed(2)}</p>
            <p className="numi">Payments Received</p>
          </div>
          <div className="ppart">
            <img className="icon" src={recev} alt="Received" />
            <p className="num">{totalPending}</p>
            <p className="numi">Orders Received</p>
          </div>
          <div className="npart">
            <img className="icon" src={goods} alt="Goods" />
            <p className="num">{totalComplete}</p>
            <p className="numi">Orders Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
