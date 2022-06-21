import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';


const Navbar = () => {
    const {state} = useContext(CartContext)
    console.log('state----------')
    console.log(state)
    return (
        <div>
            <Link to='/products'>Products</Link>
            <div>
                <p>------------</p>
                <span>{state.totalItems}</span>
                <p>++++++++++</p>
            </div>
        </div>
    );
};

export default Navbar;