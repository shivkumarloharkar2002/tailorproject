import React, { useState } from 'react'
import './NextOrderingpage.css'
import Header from '../Header/Header'
import img from "./../../assets/Login/logo.png"
import axiosInstance from '../../axiosConfing';

export default function NextOrderingPage() {


    const { id } = useParams();
    console.log(id);

    const [getAllData, setGetAllData] = useState([]);
    const getData = async () => {
        const getNote = await axiosInstance.get(
            `orderroutes/getallorder`
        );
        setGetAllData(getNote.data.data);
    };
    console.log(getAllData);

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />

            <div className="invoiceInfo">
                <Link to={"/invoice"} className="link">
                    <div className="profile-back">
                        <img src={back} alt="" className="profile-back-img" />
                        <h1 className="profile-back-text">Back</h1>
                    </div>
                </Link>

                {getAllData.map((data) => {
                    if (data._id == id)
                        return (
                            <>
                                <div className="invoiceInfo-box">
                                    <img src={logo} alt="" className="invoiceInfo-box-logo-img" />

                                    <p className="invoiceInfo-box-p">
                                        Shrigonda, Shrigonda <br /> Ahmednagar, Maharastra,414402{" "}
                                        <br /> Ph:5133145125
                                    </p>
                                    <div className="invoiceInfo-box-info">
                                        <div className="invoiceInfo-box-name-para">
                                            <p className="invoiceInfo-box-name">Bill No: 2</p>
                                            <p className="invoiceInfo-box-name">{data.createdAt}</p>
                                        </div>
                                        <p className="invoiceInfo-box-name-2">
                                            Bill To: {data.customer_id.name}
                                        </p>

                                        <div className="invoiceInfo-box-color-para">
                                            <p className="invoiceInfo-box-color-para-p">#Item</p>
                                            <p className="invoiceInfo-box-color-para-p">Qty</p>
                                            <p className="invoiceInfo-box-color-para-p">Date</p>
                                            <p className="invoiceInfo-box-color-para-p">Amount</p>
                                        </div>

                                        <div className="invoiceInfo-box-color-para-info">
                                            <p className="invoiceInfo-box-color-para-p">
                                                {data.cloth_type}
                                            </p>
                                            <p className="invoiceInfo-box-color-para-p">
                                                {data.quantity}
                                            </p>
                                            <p className="invoiceInfo-box-color-para-p">
                                                {data.createdAt}
                                            </p>
                                            <p className="invoiceInfo-box-color-para-p">
                                                {data.actualprice}/-
                                            </p>
                                        </div>

                                        <div className="invoiceInfo-box-color-para">
                                            <h4 className="invoiceInfo-box-color-para-h">Discount</h4>
                                        </div>

                                        <div className="invoiceInfo-box-color-para-info">
                                            <p className="invoiceInfo-box-color-para-p">
                                                Price:{data.actualprice}/- <br />
                                                <br /> Discount:{data.discount}%
                                            </p>
                                            <p className="invoiceInfo-box-color-para-p">
                                                CGST@ {data.cgst}%: {data.cgstprice} <br />
                                                SGST@ {data.sgst}%: {data.sgstprice}
                                            </p>
                                        </div>

                                        <div className="invoiceInfo-box-color-para2">
                                            <p className="invoiceInfo-box-color-para-p2">
                                                Total Amount:
                                                {data.total}
                                                /-
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                })}
            </div>
        </>
    );

}

