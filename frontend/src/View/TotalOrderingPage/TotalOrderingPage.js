
import React, { useState, useEffect } from "react";

import img from './hanger.png'
import './TotalOrderingPage.css'

import OrderCard from '../../Component/OrderCard/OrderCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'

import Header from '../../Component/Header/Header'
import axios from "axios";
import moment from "moment";
// import moment from "moment"


// const CardData = [
//     {
//         id: "1",
//         category: "Shirt",
//         time: "5:30pm",
//         name: "Shivkumar Loharkar"
//     },
//     {
//         id: "2",
//         category: "Pant",
//         time: "4:40pm",
//         name: "Jalindar Bhapkar"
//     },
//     {
//         id: "3",
//         category: "Kurta",
//         time: "4:20pm",
//         name: "Tushar Kothimbire"
//     },
//     {
//         id: "4",
//         category: "Pant",
//         time: "3:00pm",
//         name: "prakash Jadhav"
//     },
//     {
//         id: "5",
//         category: " Shirt",
//         time: "2:00pm",
//         name: " Rahul Kulkarni"

//     }
// ]


export default function TotalOrderingPage() {

    const [search, setSearch] = useState("");


    // get allorderin api call




    const [getAllData, setGetAllData] = useState([]);
    const getData = async () => {
        const getNote = await axios.get(
            `http://localhost:5555/api/orderroutes/getallorder`
        );
        setGetAllData(getNote.data.data);
    };
    console.log(getAllData);

    const searchData = getAllData.filter((data) => {
        const customerName = data.customer_id?.name || "Unknown Customer";
        const createdAt = data.createdAt || "";
        return (
            customerName.toLowerCase().includes(search.toLowerCase()) ||
            moment(createdAt).format("DD MMM YYYY").includes(search.toLowerCase())
        );
    });

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Header />
            <Link to={"/home"} className="link">
                <div className="profile-back">
                    <img src={back} alt="" className="profile-back-img" />
                    {/* <h1 className="profile-back-text">Back</h1> */}
                </div>
            </Link>
            <div className='MainBody'>

                <div className="invoice-input">
                    <img src={img} alt="" className="invoice-icon" />
                    <input
                        type="text"
                        className="invoice-inputs"
                        placeholder="Total Order"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>


                {/* 
                <div className="invoice-input">
                    <img src={img} alt="" className="invoice-icon" />
                    <input
                        type="text"
                        className="invoice-inputs"
                        placeholder="Today Orders"
                    />
                </div> */}
                <hr className='HR' />
                <div className="CardBody">
                    {
                        searchData.reverse().map((data) => {
                            // const time = moment(data.createdAt).format('LT');

                            const date = (moment(data.createdAt).format(" MMMM Do YYYY"))
                            const customerName = data.customer_id?.name || "Unknown Customer";

                            return (

                                <OrderCard key={data._id} cloth_type={data.cloth_type} time={date} name={customerName} id={data._id} />
                            )
                        })


                    }
                </div>
            </div>
        </>
    )
}
