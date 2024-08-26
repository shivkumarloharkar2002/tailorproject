import React from 'react'

import img from './hanger.png'
import './TodayOrder.css'
import OrderCard from '../../Component/OrderCard/OrderCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'

import Header from '../../Component/Header/Header'



const CardData = [
    {
        id: "1",
        category: "Shirt",
        time: "5:30pm",
        name: "Shivkumar Loharkar"
    },
    {
        id: "2",
        category: "Pant",
        time: "4:40pm",
        name: "Jalindar Bhapkar"
    },
    {
        id: "3",
        category: "Kurta",
        time: "4:20pm",
        name: "Tushar Kothimbire"
    },
    {
        id: "4",
        category: "Pant",
        time: "3:00pm",
        name: "prakash Jadhav"
    },
    {
        id: "5",
        category: " Shirt",
        time: "2:00pm",
        name: " Rahul Kulkarni"

    }
]


export default function TodayOrder() {

    return (
        <>
            <Header />
            <Link to={"/home"} className="link">
                <div className="profile-back">
                    <img src={back} alt="" className="profile-back-img" />
                    <h1 className="profile-back-text">Back</h1>
                </div>
            </Link>
            <div className='MainBody'>

                {/* <div className='MainOrder'>
                <div> <img className='Orderimg' src={img}></img></div>
                <div><h2 className='Otext'>Today Orders</h2></div>
            </div> */}

                <div className="invoice-input">
                    <img src={img} alt="" className="invoice-icon" />
                    <input
                        type="text"
                        className="invoice-inputs"
                        placeholder="Today Orders"
                    />
                </div>
                <hr className='HR' />
                {
                    CardData.map((data) => {
                        return (
                            <OrderCard category={data.category} time={data.time} name={data.name} id={data._id} />
                        )
                    })


                }
            </div>
        </>
    )
}
