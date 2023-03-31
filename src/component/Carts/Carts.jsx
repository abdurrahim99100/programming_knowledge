import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts] = useState([]);
    // console.log(carts)


    useEffect( () => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[]);
    return (
        <div className='carts-container'>
            <div className="carts">
                {
                    carts.map(cart => <Cart
                    key={cart.id}
                    cart={cart}
                    ></Cart>)
                }
            </div>
            <div className="side-carts">
                <h2>Side cart</h2>
            </div>
        </div>
    );
};

export default Carts;