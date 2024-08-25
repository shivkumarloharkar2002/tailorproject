import React from 'react'
import './NextOrderingpage.css'
import Header from '../Header/Header'
import img from "./../../assets/Login/logo.png"

export default function NextOrderingPage() {
    return (
        <>
            <Header />

            <img src={img} alt="" className="invoice-logo" />
            <div className='Npage'>
                <h2 className='Next'>Shivkumar Loharkar</h2>
                <h5>Number:8767234565</h5>
                <h5>Address:Shrigonda</h5>
                <h5>Email ID:shivkumar@gmail.com</h5>
                <h2 className='Next'>Orders</h2>
                <div className='NextOrder'>
                    <h4>Shirt :-</h4>
                    <div ><h5 className='Nprice'>180/-Per M</h5></div>
                    <div className='fabric'></div>
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
                <h2 className='Next'>Rs.650</h2>

                <div className='NLastpage'>
                    <div className='LastN'>
                        <h4 className='LastText'>Send</h4>
                        <h4 className='LastText'>8767899362</h4>
                    </div>
                    <div className='LastN'>
                        <h3 className='LastText'>Print Measurement</h3>
                    </div>

                </div>


            </div>
        </>
    )
}

