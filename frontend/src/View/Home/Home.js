import React from 'react'
import './Home.css'
import img1 from './customer.png'
import img2 from './customer (1).png'
import img3 from './hanger.png'
import img4 from './picture.png'
import img5 from './shopping-bag.png'
import img6 from './worker.png'
import img7 from './suit.png'
import img8 from './dashboard.png'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Header from '../../Component/Header/Header'
import { Link } from 'react-router-dom'

export default function Home() {

    const profileData = JSON.parse(localStorage.getItem('user'));
    console.log(profileData)

    if (profileData.role == "admin") {
        return (
            <>

                <Header />
                <div className='MainHome'>
                    <div className='HCard'>
                        <img className='Homeimg' src={img1} />
                        <h3 className='HText'>Add Customer</h3>
                        <Link to='/customerinfo' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img2} />
                        <h3 className='HText'>View Customer</h3>
                        <Link to='/seecustomer_details' className="link"><h5>See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img3} />
                        <h3 className='HText'>Today Order</h3>
                        <Link to='/order' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img3} />
                        <h3 className='HText'>Total Order</h3>
                        <Link to='/totalorders' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img4} />
                        <h3 className='HText'>Gallery</h3>
                        <Link to='/gallery' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img5} />
                        <h3 className='HText'>Assign Order</h3>
                        <Link to='/orderdetail' className="link"> <h5 >See Details </h5></Link>
                    </div>

                    <div className='HCard'>
                        <img className='Homeimg' src={img7} />
                        <h3 className='HText'>Ready Made</h3>
                        <Link to='/readymade' className="link"> <h5 >See Details </h5></Link>
                    </div>


                    <div className='HCard'>
                        <img className='Homeimg' src={img6} />
                        <h3 className='HText'>Manage Employee</h3>
                        <Link to='/register' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img8} />
                        <h3 className='HText'>Performance</h3>
                        <Link to='/performance' className="link"> <h5 >See Details </h5></Link>
                    </div>
                </div>

            </>
        )
    } else {
        return (
            <>

                <Header />
                <div className='MainHome'>
                    <div className='HCard'>
                        <img className='Homeimg' src={img1} />
                        <h3 className='HText'>Add Customer</h3>
                        <Link to='/customerinfo' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img2} />
                        <h3 className='HText'>View Customer</h3>
                        <Link to='/seecustomer_details' className="link"><h5>See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img3} />
                        <h3 className='HText'>Today Order</h3>
                        <Link to='/order' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img3} />
                        <h3 className='HText'>Total Order</h3>
                        <Link to='/totalorders' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img4} />
                        <h3 className='HText'>Gallery</h3>
                        <Link to='/gallery' className="link"> <h5 >See Details </h5></Link>
                    </div>
                    <div className='HCard'>
                        <img className='Homeimg' src={img5} />
                        <h3 className='HText'>Assign Order</h3>
                        <Link to='/orderdetail' className="link"> <h5 >See Details </h5></Link>
                    </div>

                    <div className='HCard'>
                        <img className='Homeimg' src={img7} />
                        <h3 className='HText'>Ready Made</h3>
                        <Link to='/readymade' className="link"> <h5 >See Details </h5></Link>
                    </div>



                </div>

            </>
        )
    }


}
