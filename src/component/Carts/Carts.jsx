import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);


    
    const addToBookmark = (product) => {
        // console.log("first", cart);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='carts-container'>
            <div className="carts">
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        addToBookmark={addToBookmark}
                    ></Cart>)
                }
            </div>
            <div className="side-carts">
                <p>Spent time on read : 0 min</p>
                <div className='side-cart-detail'>
                <SideCart
                cart={cart}
                ></SideCart>
                </div>
            </div>
        </div>
    );
};

export default Carts;