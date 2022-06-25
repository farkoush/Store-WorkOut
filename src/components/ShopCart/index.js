import React, { useContext } from 'react';
import styles from "./ShopCart.module.scss";

import {CartContext} from '@context';
const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);
    console.log(',,,,,,,,,,,,,,,,,,', state.itemsSelected)
    return (
        <div className={styles.CartContainer}>
            <section className={styles.SectionContainer}>
                    main section
            </section>
            <aside className={styles.AsideContainer}>
                <p ><span>Total Items:</span>{state.totalItems}</p>
                <p ><span>Total Payments:</span>{state.totalPrices}</p>
                <div>
                    <button onClick={() => dispatch({type:'CLEAR'})}>Clear</button>
                    <button onClick={() => dispatch({type:'CHECKOUT'})}>Checkout</button>
                </div>
            </aside>
        </div>
    );
};

export default ShopCart;