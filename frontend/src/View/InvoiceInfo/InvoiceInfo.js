import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./InvoiceInfo.css";
import Header from "./../../Component/Header/Header";
import { Link } from "react-router-dom";
import back from "./../../assets/Back/back.png";
import { useParams } from "react-router-dom";
import logo from "./../../assets/Login/logo.png";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ReactToPrint } from "react-to-print";
import axiosInstance from "../../axiosConfing";

function InvoiceInfo() {
  const componentRef = useRef();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [getAllData, setGetAllData] = useState([]);
  const getData = async () => {
    const getNote = await axiosInstance.get(
      `orderroutes/getallorder`
    );
    setGetAllData(getNote.data.data);
  };
  console.log(getAllData);

  const Delete = async () => {
    {
      await axiosInstance.delete(
        `orderroutes/deleteorder/${id}`
      );
      getData();
      navigate("/invoice");
    }
    toast.error("Note is deleted Successfully");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="invoiceInfo">
        {/* <Link to={"/invoice"} className="link"> */}
        <div className="profile-back" onClick={() => navigate(-1)}>
          <img src={back} alt="" className="profile-back-img" />
        </div>
        {/* </Link> */}

        {getAllData.map((data) => {
          const date = moment(data.createdAt).format("DD MMM YYYY");
          if (data._id == id)
            return (
              <>
                <div ref={componentRef}>
                  <div
                    className="invoiceInfo-box"
                    // ref={(el) => {
                    //   this.componentRef = el;
                    // }}
                  >
                    <img
                      src={logo}
                      alt=""
                      className="invoiceInfo-box-logo-img"
                    />

                    <p className="invoiceInfo-box-p">
                      Shrigonda, Shrigonda <br /> Ahmednagar, Maharastra,414402{" "}
                      <br /> Ph:5133145125
                    </p>
                    <div className="invoiceInfo-box-info">
                      <div className="invoiceInfo-box-name-para">
                        <p className="invoiceInfo-box-name">
                          Bill No: {data.billNumber ? data.billNumber : "1"}
                        </p>
                        <p className="invoiceInfo-box-name">{date}</p>
                      </div>
                      <p className="invoiceInfo-box-name-2">
                        Bill To:
                        {data.customer_id.name}
                      </p>

                      <div className="invoiceInfo-box-color-para">
                        <p className="invoiceInfo-box-color-para-p">#Item</p>
                        <p className="invoiceInfo-box-color-para-p">Qty</p>
                        {/* <p className="invoiceInfo-box-color-para-p">Date</p> */}
                        <p className="invoiceInfo-box-color-para-p">Amount</p>
                      </div>

                      <div className="invoiceInfo-box-color-para-info">
                        <p className="invoiceInfo-box-color-para-p">
                          1.{data.cloth_type}
                        </p>
                        <p className="invoiceInfo-box-color-para-p">
                          {data.quantity}
                        </p>
                        {/* <p className="invoiceInfo-box-color-para-p">
                        {date}
                      </p> */}
                        <p className="invoiceInfo-box-color-para-p">
                          {data.actualprice}/-
                        </p>
                      </div>

                      <div className="invoiceInfo-box-color-para">
                        <h4 className="invoiceInfo-box-color-para-h">
                          Discount
                        </h4>
                      </div>

                      <div className="invoiceInfo-box-color-para-info">
                        <p className="invoiceInfo-box-color-para-p">
                          Price:{data.actualprice}/- <br />
                          <br /> Discount:{data.discount}%
                        </p>
                        <p className="invoiceInfo-box-color-para-p">
                          CGST@ {data.cgst}%: {data.cgstprice.toFixed(2)} <br />
                          <br />
                          SGST@ {data.sgst}%: {data.sgstprice.toFixed(2)}
                        </p>
                      </div>

                      <div className="invoiceInfo-box-color-para2">
                        <p className="invoiceInfo-box-color-para-p2">
                          Total Amount:
                          {data.total.toFixed(2)}
                          /-
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoiceInfo-box-color-para-info3">
                  <ReactToPrint
                    trigger={() => {
                      return (
                        <button className="invoiceInfo-btn">Print Bill</button>
                      );
                    }}
                    content={() => componentRef.current}
                    documentTitle="new document"
                    pageStyle="print"
                  />

                  <button className="invoiceInfo-btn">Share Bill</button>
                  <button className="invoiceInfo-btn" onClick={Delete}>
                    Delete Bill
                  </button>
                </div>

                <ToastContainer />
              </>
            );
        })}
      </div>
    </>
  );
}

export default InvoiceInfo;
