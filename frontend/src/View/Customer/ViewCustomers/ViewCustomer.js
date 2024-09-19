import React from "react";
import "./ViewCustomer.css";
import customer from "../../../Image/people.png";
import SearchCard from "../../../Component/CustomerCard/SearchNameCard/SearchCard";
import { Link } from "react-router-dom";
import back from "../../../Image/back.png";
import Header from "../../../Component/Header/Header";
import axios from "axios";
// import moment from "moment";
import { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfing";

export default function ViewCustomer() {
  const [getCustomerData, setGetCustomerData] = useState([]);
  const [search, setSearch] = useState("");

  const getUser = async () => {
    const getNote = await axiosInstance.get(
      "customerroutes/getcustomer"
    );
    setGetCustomerData(getNote.data.data);
    console.log(getNote.data.data);
  };

  const searchData = getCustomerData.filter((getcustomer) => {
    return getcustomer.name.toLowerCase().includes(search.toLowerCase())
    // getcustomer.phone.toLowerCase().includes(search.toLowerCase()) 
    
  });


  //filter

  
    // const [filterData, setFilterData] = useState([]);

    // const filterDataFn = () => {
    //     let filtered = getCustomerData;

    //     console.log('Before Filtering:', filtered);

        // Apply search filter
      //   if (search) {
      //       filtered = filtered.filter((data) => {
      //           const customerName = data.customer_id?.name || "Unknown Customer";
      //           const customerNo = data.customer_id?.phone || "Unknown Customer";
      //           return (
      //               customerName.toLowerCase().includes(search.toLowerCase()) ||
      //               customerNo.toLowerCase().includes(search.toLowerCase())
      //           );
      //       });
      //   }

      //   console.log('After Search Filtering:', filtered);
      //   setFilterData(filtered);
      // }

  useEffect(() => {
    // filterDataFn();
    getUser();
  },[])
  //  [search , getCustomerData]);

  return (
    <>
      <header className="top_nav">
        <Header />
      </header>
      <Link to={"/home"} className="link">
        <div style={{ margin: "60px 0 0 10px" }}>
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Old Customer
      </h1>
      <div className="invoice-input">
        <img src={customer} alt="" className="invoice-icon" />
        <input
          type="text"
          className="invoice-inputs"
          placeholder="Search Customer Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <hr className="hr" />

      <div className="invoice-shortCards">
        {searchData.reverse().map((info) => {
          
          //  const customerNo = info.customer_id?.phone || "Unknown Customer";
          return (
            <>
              {/* <Link to='/seecustomer_details'> */}
              <SearchCard  key={info._id} name={info.name}  date={info.createdAt}  phone={info.phone} id={info._id}/>

              {/* </Link>  */}
            </>
          );
        })}
      </div>
    </>
  );
}
