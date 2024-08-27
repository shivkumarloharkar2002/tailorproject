import React, { useEffect, useState } from 'react'
import './Orders.css'
import Header from '../Header/Header'
import back from './back.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Orders() {

    const [fabricdata, setfabricdata] = useState()
    const [count, setCount] = useState(1)
    const Incre = () => {
        setCount(count + 1)
    }

    const Decre = () => {
        setCount(count - 1)
    }

    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData)

    const customerData = JSON.parse(localStorage.getItem('customer'));
    console.log(customerData)

    const measureData = JSON.parse(localStorage.getItem('measure'));
    console.log(measureData)

    const clothData = localStorage.getItem('cloth');
    console.log(clothData)

    const fabricData = localStorage.getItem('fabric');
    console.log(fabricData)



    const GetFabricdata = async () => {
        const fabricd = await axios.get('http://localhost:5555/api/fabricroutes/getallfabric');
        const fabricList = fabricd.data.data
        console.log(fabricList);

        const selectedFabric = fabricList.filter((data) => data._id === fabricData);

        setfabricdata(selectedFabric);
        console.log("price," ,selectedFabric);
    }

    useEffect(
        () => {
            GetFabricdata()
        }, []
    )



    if (clothData == "shirt" || clothData == "kurta") {
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

                            <h3 className='profile-back_Next'>{customerData.name}</h3>

                            <div className='profile_Text_data'>
                                <h5>Number: {customerData.phone}</h5>
                                <h5>Address: {customerData.address} </h5>
                                <h5>Email ID:  {customerData.email}</h5>
                            </div>
                            <div>
                                <h3 className='profile-back_Next'>Orders</h3>
                            </div>

                            <div className='Profile_Orders'>
                                <h4>{clothData} :-</h4>
                                <h5 className=''></h5>
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
                                    <h5>Collar:-<span className='Collar_value'>{measureData.collar}</span></h5>
                                    <h5>Shirt Length:-<span className='Shirt_value'>{measureData.height}</span></h5>
                                    <h5>Sleeve Size:-<span className='Sleeve_value'>{measureData.sleeve}</span></h5>
                                </div>
                                <div>
                                    <h5>Chest:-<span className='Chest_value'>{measureData.chest}</span></h5>
                                    <h5>Waist:-<span className='Waist_value'>{measureData.waist}</span></h5>
                                    <h5>Shoulder:-<span className='Shoulder_Value'>{measureData.sholder}</span></h5>
                                </div>
                            </div>

                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Price:-₹<input type='number' className='Discount' placeholder='Price' /></h5>
                                <h5>Discount:-<input type='number' className='Discount' placeholder='Discount' /></h5>
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
    } else if (clothData == "pant" || clothData == "payjama") {
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

                            <h3 className='profile-back_Next'>{customerData.name}</h3>

                            <div className='profile_Text_data'>
                                <h5>Number: {customerData.phone}</h5>
                                <h5>Address: {customerData.address} </h5>
                                <h5>Email ID:  {customerData.email}</h5>
                            </div>
                            <div>
                                <h3 className='profile-back_Next'>Orders</h3>
                            </div>

                            <div className='Profile_Orders'>
                                <h4>{clothData} :-</h4>
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
                                    <h5>pant height:-<span className='Collar_value'>{measureData.pantheight}</span></h5>
                                    <h5>pant waist:-<span className='Shirt_value'>{measureData.pantwaist}</span></h5>
                                    <h5>pant abdomen:-<span className='Sleeve_value'>{measureData.pantabdomen}</span></h5>
                                    <h5>pant hibs:-<span className='Sleeve_value'>{measureData.panthibs}</span></h5>
                                </div>
                                <div>
                                    <h5>pant thigh:-<span className='Chest_value'>{measureData.pantthigh}</span></h5>
                                    <h5>pant knee:-<span className='Waist_value'>{measureData.pantknee}</span></h5>
                                    <h5>pant calf:-<span className='Shoulder_Value'>{measureData.pantcalf}</span></h5>
                                    <h5>pant instep:-<span className='Shoulder_Value'>{measureData.pantinstep}</span></h5>
                                </div>
                            </div>

                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Price:-₹<input type='number' className='Discount' placeholder='Price' /></h5>
                                <h5>Discount:-<input type='number' className='Discount' placeholder='Discount' /></h5>
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
    } else {
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

                            <h3 className='profile-back_Next'>{customerData.name}</h3>

                            <div className='profile_Text_data'>
                                <h5>Number: {customerData.phone}</h5>
                                <h5>Address: {customerData.address} </h5>
                                <h5>Email ID:  {customerData.email}</h5>
                            </div>
                            <div>
                                <h3 className='profile-back_Next'>Orders</h3>
                            </div>

                            <div className='Profile_Orders'>
                                <h4>{clothData} :-</h4>
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
                                    <h5>safari collar:-<span className='Collar_value'>{measureData.safaricollar}</span></h5>
                                    <h5>safari chest:-<span className='Shirt_value'>{measureData.safarichest}</span></h5>
                                    <h5>safari waist:-<span className='Sleeve_value'>{measureData.safarishirtwaist}</span></h5>
                                    <h5>safari traouser hib:-<span className='Sleeve_value'>{measureData.safaritrouserhip}</span></h5>
                                </div>
                                <div>
                                    <h5>safari sleeve:-<span className='Chest_value'>{measureData.safarisleeve}</span></h5>
                                    <h5>safari sholder:-<span className='Waist_value'>{measureData.safarisholder}</span></h5>
                                    <h5>safari trouser waist:-<span className='Shoulder_Value'>{measureData.safaritrouserwaist}</span></h5>
                                    <h5>safari trouser thigh:-<span className='Shoulder_Value'>{measureData.safaritrouserthigh}</span></h5>
                                </div>
                            </div>

                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Price:-₹<input type='number' className='Discount' placeholder='Price' /></h5>
                                <h5>Discount:-<input type='number' className='Discount' placeholder='Discount' /></h5>
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

}









