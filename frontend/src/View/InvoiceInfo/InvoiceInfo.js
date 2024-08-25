import React from 'react';
import "./InvoiceInfo.css"
import Header from "./../../Component/Header/Header"
import { Link } from 'react-router-dom';
import back from "./../../assets/Back/back.jpg"

function InvoiceInfo(props) {
    return (
        <>
            <Header/>

            <Link to={"/invoice"} className='link'>
                <div className="profile-back">
                    <img src={back} alt="" className="profile-back-img" />
                    <h1 className="profile-back-text">Back</h1>
                </div>
            </Link>

            <div className="invoiceInfo-box">
                <img src="" alt="" className="invoiceInfo-box-logo-img" />

                <p className="invoiceInfo-box-p">
                    Shrigonda, Shrigonda <br /> Ahmednagar, Maharastra,414402 <br /> Ph:5133145125
                </p>

                <div className="invoiceInfo-box-info">
                    <div className="invoiceInfo-box-name-para">
                        <p className="invoiceInfo-box-name">Bill No: 2</p>
                        <p className="invoiceInfo-box-name">5/02/2014</p>
                    </div>
                    <p className="invoiceInfo-box-name-2">Bill To: xyz</p>

                    <div className="invoiceInfo-box-color-para">
                        <p className="invoiceInfo-box-color-para-p">#Item</p>
                        <p className="invoiceInfo-box-color-para-p">Qty</p>
                        <p className="invoiceInfo-box-color-para-p">Date</p>
                        <p className="invoiceInfo-box-color-para-p">Amount</p>
                    </div>

                    <div className="invoiceInfo-box-color-para-info">
                        <p className="invoiceInfo-box-color-para-p">1.Pant</p>
                        <p className="invoiceInfo-box-color-para-p">2</p>
                        <p className="invoiceInfo-box-color-para-p">1/02/2012</p>
                        <p className="invoiceInfo-box-color-para-p">600/-</p>
                    </div>

                    <div className="invoiceInfo-box-color-para">
                        <h4 className="invoiceInfo-box-color-para-h">Discount</h4>
                    </div>


                    <div className="invoiceInfo-box-color-para-info">
                        <p className="invoiceInfo-box-color-para-p">Price:600/- <br /><br /> Discount:10%</p>
                        <p className="invoiceInfo-box-color-para-p">CGST@.....%:...... <br /> IGST@.....%:...... <br /> SGST@.....%:......</p>
                    </div>

                    <div className="invoiceInfo-box-color-para2">
                    <p className="invoiceInfo-box-color-para-p2">Total Amount:1080/-</p>
                    </div>

                </div>

            </div>


        </>
    );
}

export default InvoiceInfo; 