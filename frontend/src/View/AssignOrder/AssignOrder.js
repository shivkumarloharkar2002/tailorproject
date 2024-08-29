import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Assign.css";
import back from "./back.png";
import axios from "axios";
import moment from "moment";

export default function AssignOrder() {
  const [getAllData, setGetAllData] = useState([]);
  // category
  const [type, setType] = useState("shirt");

  const getData = async () => {
    const getNote = await axios.get(
      `http://localhost:5555/api/orderroutes/getallorder`
    );
    setGetAllData(getNote.data.data);
  };
  console.log(getAllData);

  // const searchData = getAllData.filter((data) => {
  //   return (
  //     data.customer_id.name.toLowerCase().includes(search.toLowerCase()) ||
  //     data.createdAt.toLowerCase().includes(search.toLowerCase())
  //   );
  // });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <a href="/home">
        <img className="back-btn" src={back} />
      </a>
      <p className="heding-assign">Assign Orders</p>

      <div className="assign-main">
        {/* <div className="assign-left">
          <p className="aa">All</p>
          <p className="aa">Shirt</p>
          <p className="aa">Pant</p>
          <p className="aa">Kurta</p>
          <p className="aa">Pyjama</p>
          <p className="aa">Sut Safari</p>
        </div> */}

        {/* categoryes */}
        <ul type="none" className="order_list">
          <div>
            <li
              onClick={() => {
                setType("all");
              }}
              className="pp"
            >
              All
            </li>
            <li
              onClick={() => {
                setType("shirt");
              }}
              className="pp"
            >
              Shirt
            </li>

            <li
              onClick={() => {
                setType("pant");
              }}
              className="pp"
            >
              Pant
            </li>

            <li
              onClick={() => {
                setType("kurta");
              }}
              className="pp"
            >
              Kurta
            </li>

            <li
              onClick={() => {
                setType("pyjama");
              }}
              className="pp"
            >
              Pyjama
            </li>

            <li
              onClick={() => {
                setType("safari");
              }}
              className="pp"
            >
              Suit Safari
            </li>
          </div>

          <div className="assign-line"></div>
        </ul>

        <div>
          <div className="assign-patti">
            <p className="aa">No</p>
            <p className="aa">Date</p>
            <p className="aa">Stutas</p>
            <p className="aa">Order</p>
            <p className="aa">Actions</p>
          </div>

          {getAllData.reverse().map((data) => {
            if (type === data.cloth_type) {
              const date = moment(data.createdAt).format("DD MMM YYYY");
              return (
                <div className="assign-informetion">
                  <p className="aa">No.</p>
                  <p className="aa">{date}</p>
                  <p className="aa">{data.status}</p>
                  <p className="aa">{data.cloth_type}</p>
                  <button className="aa update">Update status</button>
                </div>
              );
            } else if (type == "all" && type != data.cloth_type) {
              const date = moment(data.createdAt).format("DD MMM YYYY");
              return (
                <div className="assign-informetion">
                  <p className="aa">No.</p>
                  <p className="aa">{date}</p>
                  <p className="aa">{data.status}</p>
                  <p className="aa">{data.cloth_type}</p>
                  <button className="aa update">Update status</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
