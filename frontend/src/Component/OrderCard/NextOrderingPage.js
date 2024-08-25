import React, { useState } from 'react'
import './NextOrderingpage.css'
import Header from '../Header/Header'
import img from "./../../assets/Login/logo.png"

export default function NextOrderingPage() {

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

            <img src={img} alt="" className="invoice-logo" />

            <div className='ORDERBG'>
                <p className='ORDER'>Today Order</p>
            </div>
            <div className='Npage'>
                <h2 className='Next'>Shivkumar Loharkar</h2>
                <h5>Number:8767234565</h5>
                <h5>Address:Shrigonda</h5>
                <h5>Email ID:shivkumar@gmail.com</h5>
                <h2 className='Next'>Orders</h2>

                <div className='NextOrder'>
                    <h4>Shirt :-</h4>
                    <div ><h5 className='Nprice'>180/-Per M</h5></div>
                    {/* <div className='fabric'></div> */}
                    <h4>Color :-</h4>
                    <div ><h5 className='Nprice'>Blue</h5></div>

                    <div className='Oincrement'>
                        <h4 className='Qty'>Qty:-</h4>
                        <h3 onClick={Decre} >-</h3>
                        <h2 className='count'>{count}</h2>
                        <h3 onClick={Incre} >+</h3>
                    </div>

                    {/* <div className="incre">
                        <h2 onClick={Decre} >-</h2>
                    </div>
                    <div className="incre name">
                        <h2 >{count}</h2>
                    </div>
                    <h2 onClick={Incre} >+</h2>
                     */}
                </div>

                <h2 className='Next'>Size</h2>
                <div className='Nsize'>
                    <div>
                        <h5>Collar:-<span className='Nspan'>16 in</span></h5>
                        <h5>Shirt Length:-<span className='Nspan'>30 in</span></h5>
                        <h5>Sleeve Size:-<span className='Nspan'>26.5 in</span></h5>
                    </div>
                    <div>
                        <h5>Chest:-<span className='Nspan'>20.5 in</span></h5>
                        <h5>Waist:-<span className='Nspan'>18.5 in</span></h5>
                        <h5>Shoulder:-<span className='Nspan'>19 in</span></h5>
                    </div>

                </div>
                <h2 className='Next'>Descount</h2>
                <div className='ODiscount'>
                    <h5>Price:-<span className='Nspan'>₹ 600 </span></h5>
                    <h5>Descount:-<span className='Nspan'>10%</span></h5>
                    <h5>Total:-<span className='Nspan'>540</span></h5>
                </div>


                <div className='NLastpage'>
                    <button className='BOrder' >Edit Price</button>
                    <button className='BOrder' >Edite Dis</button>
                </div>


                <div className='ONLastpage'>
                    <button className='LastN'>
                        <h4 className='LastText'>Send</h4>
                        <h4 className='LastText'>8767899362</h4>
                    </button>
                    <button className='LastN'>
                        <h3 className='LastText'>Print Measurement</h3>
                    </button>

                </div>


            </div>
        </>
    )
}

