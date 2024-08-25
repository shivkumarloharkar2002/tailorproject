import React from 'react'
import Header from '../../Component/Header/Header';
import './Performance.css';
import sales from './sales.png';
import wallet from './wallet.png';
import recev from './recev.png';
import goods from './goods.png';

export default function Performance() {
  return (
    <div>
      <Header/>
      
      <div className='parfom'>

        <div className='hedi'>
            <p className='numh' >Today's Performance</p>
        </div>
        <div className='flexp'>
            <div className='rpart'>
                <img className='icon' src={sales}/>
                <p className='num'>₹3,000</p>
                <p className='numi'>Total Sales</p>
            </div>
            <div className='jpart'>
                <img className='icon' src={wallet}/>
                <p className='num'>₹1,400</p>
                <p className='numi'>Payments Received</p>
            </div>
            <div className='ppart'>
                <img className='icon' src={recev}/>
                <p className='num'>3</p>
                <p className='numi'>Orders Received</p>
            </div>
            <div className='npart'>
                <img className='icon' src={goods}/>
                <p className='num'>1</p>
                <p className='numi'>Orders Delivered</p>
            </div>
        </div>
      </div>
      <div className='parfom'>

        <div className='hedi'>
            <p className='numh' >Total Performance</p>
        </div>
        <div className='flexp'>
            <div className='rpart'>
                <img className='icon' src={sales}/>
                <p className='num'>₹3,000</p>
                <p className='numi'>Total Sales</p>
            </div>
            <div className='jpart'>
                <img className='icon' src={wallet}/>
                <p className='num'>₹1,400</p>
                <p className='numi'>Payments Received</p>
            </div>
            <div className='ppart'>
                <img className='icon' src={recev}/>
                <p className='num'>3</p>
                <p className='numi'>Orders Received</p>
            </div>
            <div className='npart'>
                <img className='icon' src={goods}/>
                <p className='num'>1</p>
                <p className='numi'>Orders Delivered</p>
            </div>
        </div>
      </div>
    </div>
  )
}
