import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

import { CartContext } from 'context';
import { cartIcon } from 'assets/svgs';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to='/products'>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={cartIcon} /></Link>
                    <span>{state.totalItems}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;