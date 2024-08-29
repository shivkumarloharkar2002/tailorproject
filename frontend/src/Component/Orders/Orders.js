import  { useEffect, useState } from 'react'
import './Orders.css'
import Header from '../Header/Header'
import back from './back-removebg-preview.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Orders() {

    const [fabricdata, setfabricdata] = useState({})
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

        setfabricdata(selectedFabric[0]);
        console.log("fabric", selectedFabric[0]);
    }

    useEffect(
        () => {
            GetFabricdata()
        }, []
    )
    const [itemType, setItemType] = useState('pant');
    const getStitchRate = (itemType) => {
        switch (itemType) {
            case 'shirt':
                return 400.00;
            case 'pant':
                return 500.00;
            case 'kurta':
                return 500.00;
            case 'payjama':
                return 500.00;
            case 'safari':
                return 1200.00;
            default:
                return 0.00; // Default rate for unknown types
        }
    };

    const [stitchRate, setStitchRate] = useState(getStitchRate(clothData))

    const [cgstRate, setCgstRate] = useState(9); // Default rate of 9%
    const [sgstRate, setSgstRate] = useState(9); // Default rate of 9%

    const [discount, setDiscount] = useState(0);
    const [cgstprice, setCgst] = useState(0);
    const [sgstprice, setSgst] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    // const [shirtstich, setshirtstich] = useState(500)



    const clothfabric = (fabricdata.price + stitchRate) * count

    useEffect(() => {
        calculateTotals(clothfabric, discount); // Initial calculation
    }, [clothfabric, discount]); // Dependency array includes price and discount

    const handleDiscountChange = (e) => {
        const newDiscount = parseFloat(e.target.value) || 0;
        setDiscount(newDiscount);
        calculateTotals(clothfabric, newDiscount); // Pass current price
    };

    const [discountprice, setdiscountprice] = useState(0)

    const calculateTotals = (clothfabric, discount) => {
        const discountedPrice = clothfabric - (clothfabric * discount) / 100;
        const calculatedCgst = (discountedPrice * cgstRate) / 100;
        const calculatedSgst = (discountedPrice * sgstRate) / 100;
        const total = discountedPrice + calculatedCgst + calculatedSgst;

        setCgst(calculatedCgst);
        setSgst(calculatedSgst);
        setTotalAmount(total);
        setdiscountprice(discountedPrice)

    };
    // targetdate
    const [targetdate, Settargetdate] = useState()

    const createOrder = async () => {
        // (console.log("ids", customerData._id, userData._id, measureData._id))
        try {

            const createorderdata = await axios.post("http://localhost:5555/api/orderroutes/addorder", {

                customer_id: customerData._id, user_id: userData._id, discount: discount, measurement_id: measureData._id, cloth_type: fabricdata.cloth_type, fabric_price: fabricdata.price, cloth_stich: stitchRate, quantity: count, actualprice: clothfabric, discounted_price: discountprice, discount: discount, cgstRate: cgstRate, cgstprice: cgstprice, sgstRate: sgstRate, sgstprice: cgstprice, total: totalAmount, targetDate: targetdate
            })
            console.log(createorderdata)
        }
        catch (e) {
            console.log(e)
        }
    }





    if (clothData == "shirt" || clothData == "kurta") {
        return (
            <>
                <Header />

                <div className='Ordering_form'>

                    <Link to={"/home"} className="link">
                        <div className="profile-back">
                            <img src={back} alt="" className="Profile-back-img" /><br></br>
                            {/* <h5 className="profile-back-text">Back</h5> */}
                        </div>
                    </Link>

                    <div className="order-back_box">
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
                                <h4>Cloth type :-{clothData}</h4>
                                {/* <h5 className=''></h5> */}
                                {/* <div className='fabric'></div> */}
                                <h4>Color :-{fabricdata.color}</h4>
                                {/* <h5 className='fabricdata_color'></h5> */}

                            </div>
                            <div className='Order_Qty'>
                                <h4 className='Order_Qty_D'>Qty:-</h4>
                                <button className='Qty_button Qty_button_1' onClick={Decre} >-</button>
                                <h3 className='Order_count'>{count}</h3>
                                <button className='Qty_button Qty_button_2' onClick={Incre} ><span>+</span></button>
                            </div>
                            {/*  */}
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
                            {/*  */}

                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Fabric price:-{fabricdata.price}</h5>
                                <h5>Shirt stich:-{stitchRate}</h5>


                            </div>

                            {/* <h5>Dis_Price: ${discountprice}</h5> */}
                            <div className='profile_Discount'>
                                <h5>Dis_Price: ${discountprice}</h5>

                                <p className="invoiceInfo-box-color-para-p">
                                    CGST@ {cgstRate}%: {cgstprice.toFixed(2)} <br />
                                    SGST@ {sgstRate}%: {sgstprice.toFixed(2)}
                                </p>
                            </div>


                            <div className='profile_Discount'>
                                <h6>Discount:-<input type='number' className='Discount' placeholder='Discount' onChange={handleDiscountChange} /></h6>
                                {/* targetDate */}
                                <h6>TargetDate:-
                                    <input type="date" id="date" name="date" onChange={(e) => {
                                        Settargetdate(e.target.value)
                                    }} /></h6>
                            </div>

                            <div className='profile_Discount'>
                                <h5 >Actual Price:{clothfabric.toFixed(2)} <span className='Total_Price_span'>//for payjama</span></h5>

                                <h4 >Total:-<span className=''>{totalAmount.toFixed(2)}</span>/-</h4>
                            </div>


                            {/* <div className='profile_button'>
                <button className='profile_button_1' >Edit Price</button>
                <button className=' profile_button_1' >Edit Dis</button>
            </div> */}
                            <div className='profile_button_last'>
                                <button className='button_last' onClick={createOrder}>
                                    <h4 className=''>Order</h4>
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

                    {/* <Link to={"/home"} className="link">
                        <div className="profile-back">
                            <img src={back} alt="" className="Profile-back-img" /><br></br>
                            <h5 className="profile-back-text">Back</h5>
                        </div>
                    </Link> */}

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
                                <h4>Cloth type :-{clothData}</h4>
                                {/* <div className='fabric'></div> */}
                                <h4>Color :-{fabricdata.color}</h4>

                            </div>
                            <div className='Order_Qty'>
                                <h4 className='Order_Qty_D'>Qty:-</h4>
                                <button className='Qty_button Qty_button_1' onClick={Decre} >-</button>
                                <h3 className='Order_count'>{count}</h3>
                                <button className='Qty_button Qty_button_2' onClick={Incre} ><span>+</span></button>
                            </div>
                            {/*  */}

                            <div>
                                <h3 className='profile-back_Next'>Size</h3>
                            </div>

                            <div className='Profile_Size'>
                                <div>
                                    <h5>pant height:-<span className='pant_height'>{measureData.pantheight}</span></h5>
                                    <h5>pant waist:-<span className='pant_waist'>{measureData.pantwaist}</span></h5>

                                    <h5>pant hibs:-<span className='pant_hibs'>{measureData.panthibs}</span></h5>

                                    <h5>pant abdomen:-<span className='pant_abdomen'>{measureData.pantabdomen}</span></h5>
                                </div>
                                <div>
                                    <h5>pant thigh:-<span className='pant_thigh'>{measureData.pantthigh}</span></h5>
                                    <h5>pant knee:-<span className='pant_knee'>{measureData.pantknee}</span></h5>
                                    <h5>pant calf:-<span className='pant-calf'>{measureData.pantcalf}</span></h5>
                                    <h5>pant instep:-<span className='pant_instep'>{measureData.pantinstep}</span></h5>
                                </div>
                            </div>
                            {/*  */}
                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Fabric price:-{fabricdata.price}</h5>
                                <h5>Shirt stich:-{stitchRate}</h5>


                            </div>

                            {/* <h5>Dis_Price: ${discountprice}</h5> */}
                            <div className='profile_Discount'>
                                <h5>Dis_Price: ${discountprice}</h5>

                                <p className="invoiceInfo-box-color-para-p">
                                    CGST@ {cgstRate}%: {cgstprice.toFixed(2)} <br />
                                    SGST@ {sgstRate}%: {sgstprice.toFixed(2)}
                                </p>
                            </div>


                            <div className='profile_Discount'>
                                <h6>Discount:-<input type='number' className='Discount' placeholder='Discount' onChange={handleDiscountChange} /></h6>
                                {/* targetDate */}
                                <h6>TargetDate:-
                                    <input type="date" id="date" name="date" onChange={(e) => {
                                        Settargetdate(e.target.value)
                                    }} /></h6>
                            </div>

                            <div className='profile_Discount'>
                                <h5 >Actual Price:{clothfabric.toFixed(2)} <span className='Total_Price_span'>//for payjama</span></h5>

                                <h4 >Total:-<span className=''>{totalAmount.toFixed(2)}</span>/-</h4>
                            </div>


                            {/* <div className='profile_button'>
                            <button className='profile_button_1' >Edit Price</button>
                            <button className=' profile_button_1' >Edit Dis</button>
                        </div> */}
                            <div className='profile_button_last'>
                                <button className='button_last' onClick={createOrder}>
                                    <h4 className=''>Send</h4>
                                    {/* <h4 className=''>8767899362</h4> */}
                                </button>
                                <button className='button_last'>
                                    <h3 className=''>Print </h3>
                                </button>
                            </div>
                        </div>
                    </div>

                </div >
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
                            {/* <h5 className="profile-back-text">Back</h5> */}
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
                                <h4>Cloth type :-{clothData}</h4>
                                {/* <h5 className=''>180/-Per M</h5> */}
                                {/* <div className='fabric'></div> */}
                                <h4>Color :-{fabricdata.color}</h4>

                            </div>
                            <div className='Order_Qty'>
                                <h4 className='Order_Qty_D'>Qty:-</h4>
                                <button className='Qty_button Qty_button_1' onClick={Decre} >-</button>
                                <h3 className='Order_count'>{count}</h3>
                                <button className='Qty_button Qty_button_2' onClick={Incre} ><span>+</span></button>
                            </div>
                            {/*  */}

                            <div>
                                <h3 className='profile-back_Next'>Size</h3>
                            </div>

                            <div className='Profile_Size'>
                                <div>
                                    <h5>safari collar:-<span className='safari_Collar_value'>{measureData.safaricollar}</span></h5>
                                    <h5>safari chest:-<span className='safarichest_value'>{measureData.safarichest}</span></h5>
                                    <h5>safari waist:-<span className='safari waist'>{measureData.safarishirtwaist}</span></h5>
                                    <h5>safari traouser hib:-<span className='safari traouser'>{measureData.safaritrouserhip}</span></h5>
                                </div>
                                <div>
                                    <h5>safari sleeve:-<span className='safari sleeve'>{measureData.safarisleeve}</span></h5>
                                    <h5>safari sholder:-<span className='safari sholder'>{measureData.safarisholder}</span></h5>
                                    <h5>safari trouser waist:-<span className='safari trouser waist'>{measureData.safaritrouserwaist}</span></h5>
                                    <h5>safari trouser thigh:-<span className='safari trouser thigh'>{measureData.safaritrouserthigh}</span></h5>
                                </div>
                            </div>
                            {/*  */}

                            <div>
                                <h3 className='profile-back_Next'>Discount</h3>
                            </div>
                            <div className='profile_Discount'>
                                <h5>Fabric price:-{fabricdata.price}</h5>
                                <h5>Shirt stich:-{stitchRate}</h5>


                            </div>

                            {/* <h5>Dis_Price: ${discountprice}</h5> */}
                            <div className='profile_Discount'>
                                <h5>Dis_Price: ${discountprice}</h5>

                                <p className="invoiceInfo-box-color-para-p">
                                    CGST@ {cgstRate}%: {cgstprice.toFixed(2)} <br />
                                    SGST@ {sgstRate}%: {sgstprice.toFixed(2)}
                                </p>
                            </div>


                            <div className='profile_Discount'>
                                <h6>Discount:-<input type='number' className='Discount' placeholder='Discount' onChange={handleDiscountChange} /></h6>
                                {/* targetDate */}
                                <h6>TargetDate:-
                                    <input type="date" id="date" name="date" onChange={(e) => {
                                        Settargetdate(e.target.value)
                                    }} /></h6>
                            </div>

                            <div className='profile_Discount'>
                                <h5 >Actual Price:{clothfabric.toFixed(2)} <span className='Total_Price_span'>//for payjama</span></h5>

                                <h4 >Total:-<span className=''>{totalAmount.toFixed(2)}</span>/-</h4>
                            </div>

                            {/* <div className='profile_button'>
                <button className='profile_button_1' >Edit Price</button>
                <button className=' profile_button_1' >Edit Dis</button>
            </div> */}
                            <div className='profile_button_last'>
                                <button className='button_last' onClick={createOrder}>
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



