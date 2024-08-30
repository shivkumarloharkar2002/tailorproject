import React from "react";
import "./ViewCustomer.css";
import customer from "../../../Image/people.png";
import SearchCard from "../../../Component/CustomerCard/SearchNameCard/SearchCard";
import { Link } from "react-router-dom";
import back from "../../../Image/back.jpg";
import Header from "../../../Component/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ViewCustomer() {
  const [getCustomerData, setGetCustomerData] = useState([]);
  const [search, setSearch] = useState("");

  const getUser = async () => {
    const getNote = await axios.get(
      "http://localhost:5555/api/customerroutes/getcustomer"
    );
    setGetCustomerData(getNote.data.data);
    console.log(getNote.data.data);
  };

  const searchData = getCustomerData.filter((getcustomer) => {
    return getcustomer.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getUser();
  }, []);

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
        {searchData.map((info) => {
          return (
            <>
              {/* <Link to='/seecustomer_details'> */}
              <SearchCard
                name={info.name}
                date={info.createdAt}
                phone={info.phone}
                // price={info.price}
                id={info._id}
              />

              {/* </Link>  */}
            </>
          );
        })}
      </div>
    </>
  );
}
