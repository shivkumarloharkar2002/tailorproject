import React, { useState } from 'react'
import './Orders.css'
import Header from '../Header/Header'
import back from './back.jpg'
import { Link } from 'react-router-dom'

export default function Orders() {

    const [count, setCount] = useState(1)
    const Incre = () => {
        setCount(count + 1)
    }

    const Decre = () => {
        setCount(count - 1)
    }

    return (
        <>
            <Header />

            <div className='Ordering_form'>

                <Link to={"/home"} className="link">
                    <div className="profile-back">
                        <img src={back} alt="" className="Profile-back-img" /><br></br>
                        <h5 className="profile-back-text">Back</h5>
                    </div>
                </Link>

                <div className="profile-back_box">
                    <div className='profile_Text'>

                        <h3 className='profile-back_Next'>Aniket Supekar</h3>

                        <div className='profile_Text_data'>
                            <h5>Number:8767234565</h5>
                            <h5>Address:Shrigonda</h5>
                            <h5>Email ID:shivkumar@gmail.com</h5>
                        </div>
                        <div>
                            <h3 className='profile-back_Next'>Orders</h3>
                        </div>

                        <div className='Profile_Orders'>
                            <h4>Shirt :-</h4>
                            <h5 className=''>180/-Per M</h5>
                            {/* <div className='fabric'></div> */}
                            <h4>Color :-</h4>
                            <h5 className=''>Blue</h5>
                            <div className='Order_Qty'>
                                <h4 className='Order_Qty_D'>Qty:-</h4>
                                <button className='Qty_button Qty_button_1' onClick={Decre} >-</button>
                                <h3 className='Order_count'>{count}</h3>
                                <button className='Qty_button Qty_button_2' onClick={Incre} ><span>+</span></button>
                            </div>
                        </div>

                        <div>
                            <h3 className='profile-back_Next'>Size</h3>
                        </div>

                        <div className='Profile_Size'>
                            <div>
                                <h5>Collar:-<span className='Collar_value'>16 in</span></h5>
                                <h5>Shirt Length:-<span className='Shirt_value'>30 in</span></h5>
                                <h5>Sleeve Size:-<span className='Sleeve_value'>26.5 in</span></h5>
                            </div>
                            <div>
                                <h5>Chest:-<span className='Chest_value'>20.5 in</span></h5>
                                <h5>Waist:-<span className='Waist_value'>18.5 in</span></h5>
                                <h5>Shoulder:-<span className='Shoulder_Value'>19 in</span></h5>
                            </div>
                        </div>

                        <div>
                            <h3 className='profile-back_Next'>Discount</h3>
                        </div>
                        <div className='profile_Discount'>
                            <h5>Price:-₹<input type='number' className='Discount' placeholder='Price'/></h5>
                            <h5>Discount:-<input type='number' className='Discount' placeholder='Discount'/></h5>
                            <h5>Total:-<span className='Discount'>540</span>/-</h5>
                        </div>

                        {/* <div className='profile_button'>
                            <button className='profile_button_1' >Edit Price</button>
                            <button className=' profile_button_1' >Edit Dis</button>
                        </div> */}
                        <div className='profile_button_last'>
                            <button className='button_last'>
                                <h4 className=''>Send</h4>
                                {/* <h4 className=''>8767899362</h4> */}
                            </button>
                            <button className='button_last'>
                                <h3 className=''>Print </h3>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
