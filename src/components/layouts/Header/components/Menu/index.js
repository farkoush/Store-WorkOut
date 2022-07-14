import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Menu.module.scss';

 const Menu = () => {
    return(
        <Link className={styles.productLink} to='/products'>Products</Link>
    )
 }

 export default Menu;