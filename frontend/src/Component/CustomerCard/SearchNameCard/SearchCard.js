import React from "react";
import "./SearchCard.css";
import { Link } from "react-router-dom";
import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

export default function SearchCard({ name, date, id }) {
  const todaydate = moment(date).format("DD MMM YYYY");

  return (
    <>
      <div className="invoice-shortCard">
        <Link to={`/viewcategory/${id}`} className="link">
          <div className="invoice-short">
            <p className="cust_info">{name}</p>
            <p className="invoice-short-amount">
              {todaydate}
              {/* <br />
              Paid- ₹ 
              {price}
              /- */}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
