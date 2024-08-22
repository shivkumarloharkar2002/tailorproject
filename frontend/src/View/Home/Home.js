import React from 'react'
import './Home.css'
import img1 from './customer.png'
import img2 from './customer (1).png'
import img3 from './hanger.png'
import img4 from './picture.png'
import img5 from './shopping-bag.png'
import img6 from './worker.png'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Header from '../../Component/Header/Header'

export default function Home() {
    return (
        <>
        <Header/>
            <div className= 'MainHome'>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img1} />
                    <h3 className='HText'>Add Customer</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img2} />
                    <h3 className='HText'>View Customer</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img3} />
                    <h3 className='HText'>Today Order</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img3} />
                    <h3 className='HText'>Total Order</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img4} />
                    <h3 className='HText'>Gallery</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img5} />
                    <h3 className='HText'>Assign Order</h3>
                    <h5>See Details </h5>
                </div>
                <div className='HCard'>
                    <img className= 'Homeimg' src={img6} />
                    <h3 className='HText'>Worker List</h3>
                    <h5>See Details </h5>
                </div>
            </div>

        </>
    )
}
