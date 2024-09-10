import React, { useState } from "react";
import "./SearchCard.css";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import AxiosInstance from "../../../axiosConfing";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

export default function SearchCard({ name, date, phone, id }) {
  const todaydate = moment(date).format("DD MMM YYYY");

  // const [Customerdata, setCustomerdata] = useState({});
  const navigate = useNavigate();


  const Get_customer = async () => {
    const Customer = await AxiosInstance.get(
      "customerroutes/getcustomer"
    );
    const Customerlist = Customer.data.data
    const selectedcutomer = Customerlist.filter((data) => data._id === id);
    // setCustomerdata(selectedcutomer[0]);
    console.log("customer", selectedcutomer[0]);

    localStorage.setItem("customer", JSON.stringify(selectedcutomer[0]));
    navigate(`/viewcategory/${id}`);
  }

  return (
    <>
      <div className="invoice-shortCard ">
        <div  onClick={() => {
                    Get_customer("shirt")}}>
        <Link to={`/viewcategory/${id}`} className="link">
          <div className="invoice-short searchCard">
            <p className="cust_info">{name}</p>
            <p className="cust_price">
              <span className="sdate"> {todaydate}</span>
              <br /> <span className="sdate"> {phone}</span>
              {/* <br />
              Paid- ₹ 
              {price}
              /- */}
            </p>
          </div>
        </Link>

        </div>
      </div>
    </>
  );
}
