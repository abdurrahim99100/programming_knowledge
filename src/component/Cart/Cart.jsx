import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // console.log(props.cart)
    const { banner, id, profilePicture, name, registered, time, about } = props.cart;
    console.log(profilePicture);


    return (
        <div className='cart-container'>
            <img src={banner} alt="" />
            <div className='cart-dtl-container'>
                <div className='cart-details'>
                    <img src={profilePicture} alt="" />
                    <div className='name-registered'>
                        <h3>{name}</h3>
                        <label htmlFor="#">{registered}</label>
                    </div>
                </div>
                <div className='btn-container'>
                <label htmlFor="">{time} min read</label>
                <button className='cart-button'>
                <FontAwesomeIcon className='font-aws-icon' icon={faBookmark} />
                </button>
                </div>
            </div>
            <h2>{about}</h2>
            <label htmlFor="#">#beginners</label>
            <label htmlFor="#"> #programming</label>
            <a className='last-atag' href="#">Mark as read</a>
            <hr className='hr-line' />
        </div>
    );
};

export default Cart;