import React, { useContext } from 'react';
import styles from "./HorizontalProductCart.module.scss";
import { Link } from 'react-router-dom';

import { CartContext } from 'context';

import {cartIcon, trashIcon} from 'assets/svgs';

//helper
import { isInCart, quantityCounter, limitWords } from 'utils/helper';

const HorizontalProductCart = ({item}) => {
    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = item;
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.Thumbnail}><img className={styles.productImage} alt={item.title} src={item.image} /></div>
                <div className={styles.data}>
                    <h3 className={styles.Title}>
                        {limitWords(item.title, 2)}
                    </h3>
                    <p className={styles.Description}>{item.price}</p>
                </div>
                <div>
                    <span className={styles.quantity}>{quantity}</span>
                </div>
                <div className={styles.buttonContainer}>
                {/* {
                    isInCart(state, item.id ) ?
                    <div>
                        <button className={styles.smallButton} onClick={() => dispatch({type:'INCREASE' , payload:item})}>+</button>
                        {quantityCounter(state, item.id) === 1 &&
                            <button className={styles.smallButton} onClick={() => dispatch({type: 'REMOVE_CART', payload: item})}>Remove</button>}
                        {quantityCounter(state, item.id) > 1 &&
                            <button className={styles.smallButton} onClick={() => dispatch({type: 'DECREASE', payload: item})}>-</button>}
                    </div>:
                    <div>
                        <button aria-label="add-cart" onClick={() => dispatch({type: 'ADD_CART', payload: item})}><img src={cartIcon} alt="" /></button>
                    </div>
                } */}
                    <div className={styles.buttonContainer}>
                        {
                            quantity > 1 ? 
                            <button onClick={() => dispatch({type: "DECREASE", payload: item})} >-</button> :
                            <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: item})} ><img src={trashIcon} alt="trash" /></button>
                        }
                        <button onClick={() => dispatch({type: "INCREASE", payload: item})} >+</button>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default HorizontalProductCart;