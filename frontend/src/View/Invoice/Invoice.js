import React, { useState } from "react";
import "./Invoice.css";
import searchImg from "./../../assets/Invoice/search.jpg";
import ShortCard from "../../Component/Invoice/ShortCard";
import { Link } from "react-router-dom";
import Header from "../../Component/Header/Header";
import img from "./../../assets/Login/logo.png";
import back from "./../../assets/Back/back.jpg";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";

function Invoice() {
  const [amount, setAmount] = useState(0);
  const [search, setSearch] = useState("");
  // setAmount(amount + info.price)

  const [getAllData, setGetAllData] = useState([]);
  const getData = async () => {
    const getNote = await axios.get(
      `http://localhost:5555/api/orderroutes/getallorder`
    );
    setGetAllData(getNote.data.data);
  };
  console.log(getAllData);

  const searchData = getAllData.filter((data) => {
    return (
      data.customer_id.name.toLowerCase().includes(search.toLowerCase()) ||
      data.createdAt.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const total = getAllData.reduce((sum, data) => sum + (data.total || 0), 0);
    setAmount(total);
  }, [getAllData]);

  
  return (
    <div>
      <Header />

      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          
        </div>
      </Link>

      <img src={img} alt="" className="invoice-logo" />

      <div className="invoice-paisa">
        <p className="invoice-total">
          Total Earned Amount <br />
          <span className="invoice-amount">₹ {amount.toFixed(2)}</span>
        </p>
      </div>
      

      <div className="invoice-input">
        <img src={searchImg} alt="" className="invoice-icon" />
        <input
          type="text"
          className="invoice-inputs"
          placeholder="search customer name or book no."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <hr className="invoice-hr" />

      <div className="invoice-shortCards">
        {searchData.reverse().map((info) => {
          
          const date = (moment(info.createdAt).format("DD MMM YYYY"))
          return ( 
            <>
              <ShortCard
                name={info.customer_id.name}
                date={date}
                price={info.total.toFixed(2)}
                id={info._id}
              />
            </>

          );
        }
        )
        }
      </div >
    </div>
  );
}

export default Invoice;
