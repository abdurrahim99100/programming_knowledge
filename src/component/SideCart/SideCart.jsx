import React, { useState } from 'react';
import Bookmark from './Bookmark';
import './SideCart.css'


const SideCart = (props) => {
    // console.log(props);
    // const [carts, setCarts] = useState([]);

const newCart = props.cart;






    return (
        <div>
            <div className='side-cart-list-container'>
                <h3>Bookmarked Blogs : {props.cart.length}</h3>   
            </div>
            <div>
                {
                    newCart.map(singleCart => <Bookmark
                    singleCart={singleCart}
                    key={singleCart.id}
                    ></Bookmark>)
                }               
            </div>
        </div>
    );
};

export default SideCart;