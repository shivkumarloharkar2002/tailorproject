import React from 'react'
import './NextOrderingpage.css'
import Header from '../Header/Header'

export default function NextOrderingPage() {
    return (
        <>
            <Header />
            <div className='Npage'>
                <h1 className='Next'>Shivkumar Loharkar</h1>
                <h3>Number:8767234565</h3>
                <h3>Address:Shrigonda</h3>
                <h3>Email ID:shivkumar@gmail.com</h3>
                <h1 className='Next'>Orders</h1>
                <div className='NextOrder'>
                    <h2>Shirt :-</h2>
                    <div ><h3 className='Nprice'>180/-Per M</h3></div>
                    <div className='fabric'></div>
                </div>

                <h1 className='Next'>Size</h1>
                <div className='Nsize'>
                    <div>
                        <h4>Collar:-<span className='Nspan'>16 in</span></h4>
                        <h4>Shirt Length:-<span className='Nspan'>30 in</span></h4>
                        <h4>Sleeve Size:-<span className='Nspan'>26.5 in</span></h4>
                    </div>
                    <div>
                        <h4>Chest:-<span className='Nspan'>20.5 in</span></h4>
                        <h4>Waist:-<span className='Nspan'>18.5 in</span></h4>
                        <h4>Shoulder:-<span className='Nspan'>19 in</span></h4>
                    </div>

                </div>
                <h1 className='Next'>Rs.650</h1>

                <div className='NLastpage'>
                    <div className='LastN'>
                        <h3 className='LastText'>Send</h3>
                        <h3 className='LastText'>8767899362</h3>
                    </div>
                    <div className='LastN'>
                        <h3 className='LastText'>Print Measurement</h3>
                    </div>

                </div>


            </div>
        </>
    )
}

