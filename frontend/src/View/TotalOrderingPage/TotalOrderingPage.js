import React from 'react'
import './TotalOrderingPage.css'
import img from './hanger.png'
import OrderCard from '../../Component/OrderCard/OrderCard'
import Header from '../../Component/Header/Header'
import back from './back.jpg'
import { Link } from 'react-router-dom'


const CardData = [
    {
        id: "1",
        category: "Shirt",
        date: "5/1/2024",
        name: "Shivkumar Loharkar"
    },
    {
        id: "2",
        category: "Pant",
        date: "15/5/2024",
        name: "Jalindar Bhapkar"
    },
    {
        id: "3",
        category: "Kurta",
        date: "12/5/2024",
        name: "Tushar Kothimbire"
    },
    {
        id: "4",
        category: "Pant",
        date: "5/1/2024",
        name: "prakash Jadhav"
    },
    {
        id: "5",
        category: " Shirt",
        date: "5/11/2024",
        name: " Rahul Kulkarni"

    }
]

export default function TotalOrderingPage() {
  return (
    <>
    <Header/>
    <div className='Backmain'><Link to='/home'><img src={back} className='Backimg'/>Back</Link></div>
    <div className='MainBody'>
        
    {/* <div className='MainOrder'>
         <div> <img className='Orderimg' src={img}></img></div>
         <div><h2 className='Otext'>Total Orders</h2></div>
     </div> */}


<div className="invoice-input">
                    <img src={img} alt="" className="invoice-icon" />
                    <input
                        type="text"
                        className="invoice-inputs"
                        placeholder="Total Orders"
                    />
                </div>
     <hr className='HR' />
     {
         CardData.map((data) => {
             return (
                 <OrderCard category={data.category} time={data.date} name={data.name} id={data._id} />
             )
         })


     }
    </div>
 </>
  )
}
