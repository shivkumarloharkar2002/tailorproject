import React from 'react'
import './TodayOrderPage.css'


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

export default function TotalOrderingPage() {
  return (
    <>
    <div className='MainBody'>
    <div className='MainOrder'>
         <div> <img className='Orderimg' src={img}></img></div>
         <div><h2 className='Otext'>Total Orders</h2></div>
     </div>

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
