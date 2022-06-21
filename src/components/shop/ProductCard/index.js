import React, { useContext } from 'react';
import styles from "./index.module.scss";
import { Link } from 'react-router-dom';

import { CartContext } from '../../../context/CartContextProvider';

//helper
import { isInCart, quantityCounter } from '../../../helper';

const ProductCard = ({item}) => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div>
            <div className={styles.ProductCardContainer}>
                <div className={styles.Thumbnail}><img alt={item.title} src={item.image} /></div>
                <div className={styles.Details}>
                    <h3 className={styles.Title}>
                        {item.title}
                    </h3>
                    <p className={styles.Description}>{item.price}</p>
                </div>
                <Link to={`/products/${item.id}/`}>Details</Link>
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
                        <button onClick={() => dispatch({type: 'ADD_CART', payload: item})}>Add to Cart</button>
                    </div>
                }
        </div>
        </div>
    );
};

export default ProductCard;