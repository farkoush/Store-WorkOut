import React, { useContext } from 'react';
import styles from "./ProductCard.module.scss";
import { Link } from 'react-router-dom';

import { CartContext } from '@context';

import {cartIcon} from '@svgs';

//helper
import { isInCart, quantityCounter, limitWords } from '../../../../utils/helper';

const ProductCard = ({item}) => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div>
            <div className={styles.ProductCardContainer}>
                <div className={styles.Thumbnail}><img alt={item.title} src={item.image} /></div>
                <div className={styles.Details}>
                    <h3 className={styles.Title}>
                        {limitWords(item.title, 2)}
                    </h3>
                    <p className={styles.Description}>{item.price}</p>
                </div>
                <Link to={`/products/${item.id}/`}>Details</Link>
                <div className={styles.buttonContainer}>
                {
                    isInCart(state, item.id ) ?
                    <div>
                        <button onClick={() => dispatch({type:'INCREASE' , payload:item})}>+</button>
                        {quantityCounter(state, item.id) === 1 &&
                            <button onClick={() => dispatch({type: 'REMOVE_CART', payload: item})}>Remove</button>}
                        {quantityCounter(state, item.id) > 1 &&
                            <button onClick={() => dispatch({type: 'DECREASE', payload: item})}>-</button>}
                    </div>:
                    <div>
                        <button onClick={() => dispatch({type: 'ADD_CART', payload: item})}><img src={cartIcon} alt="" /></button>
                    </div>
                }
                </div>
        </div>
        </div>
    );
};

export default ProductCard;