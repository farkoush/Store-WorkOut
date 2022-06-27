import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from 'context';

import {cartIcon} from 'assets/svgs';

const Navbar = () => {
    const {state} = useContext(CartContext)
    console.log('state----------')
    console.log(state)
    return (
        <div>
            <Link to='/products'>Products</Link>
            <div>
                <img src={cartIcon} alt="" />
                <span>{state.totalItems}</span>
            </div>
        </div>
    );
};

export default Navbar;