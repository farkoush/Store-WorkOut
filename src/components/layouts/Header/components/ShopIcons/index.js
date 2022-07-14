import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from 'context';
import { cartIcon } from 'assets/svgs';
import styles from './ShopIcons.module.scss';

 const ShopIcons = () => {
    const {state} = useContext(CartContext)
    return(
        <div className={styles.iconContainer}>
            <Link to="/cart"><img src={cartIcon} /></Link>
            <span>{state.totalItems}</span>
        </div>
    )
 }

 export default ShopIcons;