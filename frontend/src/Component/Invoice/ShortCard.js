import React from 'react';
import "./ShortCard.css"
import { Link } from 'react-router-dom';

function ShortCard({ name, date, price, id }) {
    return (
        // <div className='invoice-shortCard'>
            <Link to={`/invoiceInfo/${id}`} className='link'>
                <div className="invoice-short" >
                    <p className="invoice-short-text" >{name}</p>
                    <p className="invoice-short-amount">
                    {date} 
                    <br />Paid- ₹ {price}/-</p>
                </div>
            </Link>
        // </div>
    );   
} 

export default ShortCard; 