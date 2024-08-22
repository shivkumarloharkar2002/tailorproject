import React from "react";
import "./Invoice.css";
import search from "./../../assets/Invoice/search.jpg"
import ShortCard from "../../Component/Invoice/ShortCard";
import { Link } from "react-router-dom";

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
];

function Invoice() {
  return (
    <div>
      
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

      {Data.map((info) => {
        return (
         
            <ShortCard name={info.name} date={info.date} price={info.price} id={info.id} />
          
        );
      })}
    </div>
  );
}

export default Invoice;
