import React from 'react'
import './NextTotalOrderingPage.css'
import img from "./../../assets/Login/logo.png"
import Header from '../Header/Header'

export default function NextTotalOrderinPage() {
  return (
    <>
    <Header/>
                <img src={img} alt="" className="invoice-logo" />

       <div className='Npage'>
        
                <h3 className='Next'>Shivkumar Loharkar</h3>
                <h5>Number:8767234565</h5>
                <h5>Address:Shrigonda</h5>
                <h3 className='Next'>Orders</h3>
                <div className='NextOrder'>
                <h5>Shirt :-</h5>
                <div ><h1 className='Nprice'>180/-Per M</h1></div>
                </div>

                <h3 className='Next'>Size</h3>
               <div className='Nsize'>
               <h5>Collar:-<span className='Nspan'>16 in</span></h5>
               <h2>Shirt Length:-<span className='Nspan'>30 in</span></h2>
               <h2>Sleeve Size:-<span className='Nspan'>26.5 in</span></h2>
               <h2>Chest:-<span className='Nspan'>20.5 in</span></h2>
               <h2>Waist:-<span className='Nspan'>18.5 in</span></h2>
               <h2>Shoulder:-<span className='Nspan'>19 in</span></h2>

               <h1 className='Next'>Rs.650</h1>

               <div className='NLastpage'>
                        <div className='LastN'>
                            <h3 className='LastText'>Send</h3>
                            <h3  className='LastText'>8767899362</h3>
                        </div>
                        <div className='LastN'>
                            <h3  className='LastText'>Print Measurement</h3>
                        </div>

                    </div>
               </div>
            </div>
    </>
  )
}
