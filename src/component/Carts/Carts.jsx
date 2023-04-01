import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([0]);


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);


    
    const addToBookmark = (product) => {
        // console.log("first", cart);
        const newCart = [...cart, product];
        setCart(newCart);
    };
        
    const minAddToCart = (product) => {
        // console.log('hello',product);
        const totalTime = parseInt(time + product);
        setTime(totalTime);
        
    }

    
    return (
        <div className='carts-container'>
            <div className="carts">
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        carts={carts}
                        addToBookmark={addToBookmark}
                        minAddToCart={minAddToCart}
                    ></Cart>)
                }
            </div>
            <div className="side-carts">
                <div>
                <p>Spent time on read :{time} min</p>
                </div>
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