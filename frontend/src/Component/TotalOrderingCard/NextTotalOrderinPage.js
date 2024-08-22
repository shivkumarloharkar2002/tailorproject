import React from 'react'
import './NextTotalOrderingPage.css'

export default function NextTotalOrderinPage() {
  return (
    <>
       <div className='Npage'>
                <h1 className='Next'>Shivkumar Loharkar</h1>
                <h2>Number:8767234565</h2>
                <h2>Address:Shrigonda</h2>
                <h1 className='Next'>Orders</h1>
                <div className='NextOrder'>
                <h2>Shirt :-</h2>
                <div ><h1 className='Nprice'>180/-Per M</h1></div>
                </div>

                <h1 className='Next'>Size</h1>
               <div className='Nsize'>
               <h2>Collar:-<span className='Nspan'>16 in</span></h2>
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
