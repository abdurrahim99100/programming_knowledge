import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { banner, id, profilePicture, name, registered, time } = props.cart;
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
                <button className='cart-button'>{time} min read</button>
            </div>
        </div>
    );
};

export default Cart;