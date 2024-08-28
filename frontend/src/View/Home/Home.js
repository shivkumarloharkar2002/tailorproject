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
                    <Link to='/customerinfo' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img1} />
                            <h3 className='HText'>Add Customer</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/seecustomer_details' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img2} />
                            <h3 className='HText'>View Customer</h3>
                            <h5>See Details </h5>
                        </div>
                    </Link>
                    <Link to='/order' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img3} />
                            <h3 className='HText'>Today Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/totalorders' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img3} />
                            <h3 className='HText'>Total Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/gallery' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img4} />
                            <h3 className='HText'>Gallery</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/orderdetail' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img5} />
                            <h3 className='HText'>Assign Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/readymade' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img7} />
                            <h3 className='HText'>Ready Made</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>

                    <Link to='/register' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img6} />
                            <h3 className='HText'>Manage Employee</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/performance' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img8} />
                            <h3 className='HText'>Performance</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                </div>

            </>
        )
    } else {
        return (
            <>

                <Header />
                <div className='MainHome'>
                    <Link to='/customerinfo' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img1} />
                            <h3 className='HText'>Add Customer</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/seecustomer_details' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img2} />
                            <h3 className='HText'>View Customer</h3>
                            <h5>See Details </h5>
                        </div>
                    </Link>
                    <Link to='/order' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img3} />
                            <h3 className='HText'>Today Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/totalorders' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img3} />
                            <h3 className='HText'>Total Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/gallery' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img4} />
                            <h3 className='HText'>Gallery</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/orderdetail' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img5} />
                            <h3 className='HText'>Assign Order</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>
                    <Link to='/readymade' className="link">
                        <div className='HCard'>
                            <img className='Homeimg' src={img7} />
                            <h3 className='HText'>Ready Made</h3>
                            <h5 >See Details </h5>
                        </div>
                    </Link>



                </div>

            </>
        )
    }


}
