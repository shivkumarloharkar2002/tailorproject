import React from "react";
import "./Invoice.css";
import search from "./../../assets/Invoice/search.jpg"
import ShortCard from "../../Component/Invoice/ShortCard";
import { Link } from "react-router-dom";
import Header from "../../Component/Header/Header";
import img from "./../../assets/Login/logo.png"

const Data = [
  {
    id: 1,
    name: "abc",
    date: "10/02/12",
    price: 235,
  },
  {
    id: 2,
    name: "xyz",
    date: "10/02/12",
    price: 2351,
  },
  {
    id: 3,
    name: "pqr",
    date: "10/02/12",
    price: 245,
  },
  {
    id: 4,
    name: "pqr",
    date: "10/02/12",
    price: 245,
  },
  {
    id: 5,
    name: "pqr",
    date: "10/02/12",
    price: 245,
  },
];

function Invoice() {
  return (
    <div>

      <Header />

      <img src={img} alt=""  className="invoice-logo"/>

      <div className="invoice-paisa">
        <p className="invoice-total">
          Total Earned Amount <br />
          <span className="invoice-amount">₹ 3000</span>
        </p>
      </div>

      <div className="invoice-input">
        <img src={search} alt="" className="invoice-icon" />
        <input
          type="text"
          className="invoice-inputs"
          placeholder="search customer name or book no."
        />
      </div>

      <hr className="invoice-hr" />

      <div className="invoice-shortCards">
        {Data.map((info) => {
          return (

            <ShortCard name={info.name} date={info.date} price={info.price} id={info.id} />

          );
        })}
      </div>
    </div>
  );
}

export default Invoice;
