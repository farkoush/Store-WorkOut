import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import styles from "./ShopCart.module.scss";

import {CartContext} from 'context';
import HorizontalProductCart from 'components/shared/Card/HorizontalProductCart';
const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
        <div className={styles.cartContainer}>
            <section className={styles.cartContainer}>
                {state.itemsSelected.map(item => <HorizontalProductCart key={item.id} item={item} />)}
            </section>
        </div>
        {
            state.totalItems > 0 &&
            <aside className={styles.payments}>
                <p ><span>Total Items:</span>{state.totalItems}</p>
                <p ><span>Total Payments:</span>{state.totalPrices}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={() => dispatch({type:'CLEAR'})}>Clear</button>
                    <button className={styles.checkout} onClick={() => dispatch({type:'CHECKOUT'})}>Checkout</button>
                </div>
            </aside>
        }
        {
            state.totalItems === 0 && !state.checkout && 
            <div className={styles.complete}>
                <h3>Want to buy?</h3>
                <Link to="/products">Go to shop</Link>
            </div>
        }
        {
            state.checkout && 
                <div className={styles.complete}>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
        }
        </div>
    );
};

export default ShopCart;