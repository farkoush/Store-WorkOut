import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

import { CartContext } from 'context';
import { cartIcon } from 'assets/svgs';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.wrapper}>
                <Link to='/products'>Products</Link>
                <div>
                    <img src={cartIcon} alt="" />
                    <span>{state.totalItems}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;