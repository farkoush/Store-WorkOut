import React, { useContext } from 'react';
import styles from "./ProductCard.module.scss";
import { Link } from 'react-router-dom';

import { CartContext } from 'context';

import {cartIcon, trashIcon} from 'assets/svgs';

//helper
import { isInCart, quantityCounter, limitWords } from 'utils/helper';

const ProductCard = ({item}) => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.tumbnail} alt={item.title} src={item.image} />
                <div className={styles.details}>
                    <h3 className={styles.title}>
                        {limitWords(item.title, 2)}
                    </h3>
                    <p className={styles.desc}>{item.price}</p>
                </div>
                <div className={styles.linkContainer}>
                    <Link to={`/products/${item.id}/`}>Details</Link>
                    <div className={styles.buttonContainer}>
                    {
                        isInCart(state, item.id ) ?
                        <div>
                            <button className={styles.smallButton} onClick={() => dispatch({type:'INCREASE' , payload:item})}>+</button>
                            {quantityCounter(state, item.id) === 1 &&
                                <button className={styles.smallButton} onClick={() => dispatch({type: 'REMOVE_CART', payload: item})}><img src={trashIcon}  alt='remove' /></button>}
                            {quantityCounter(state, item.id) > 1 &&
                                <button className={styles.smallButton} onClick={() => dispatch({type: 'DECREASE', payload: item})}>-</button>}
                        </div>:
                        <div>
                            <button aria-label="add-cart" onClick={() => dispatch({type: 'ADD_CART', payload: item})}><img src={cartIcon} alt="" /></button>
                        </div>
                    }
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ProductCard;