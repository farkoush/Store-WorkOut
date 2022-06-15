import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom'
//context
import { ProductsContext } from '../../../context/ProductsContextProvider';

import styles from './index.module.scss'
const ProductDetails = (props) => {
    const params = useParams();
    const products = useContext(ProductsContext)
    if (products === undefined) return;
    const product = products[params.id - 1] 
    if (product === undefined) return (<p>Product Not found</p>);
    console.log('product'); //BUG: run second time
    console.log(product);
    const {title,description,image,price, category } = product;
    return (
        <div className={styles.productDetailsContainer}>
            <div className={styles.thumbnail}><img  alt="" src={image}/></div>
            <div className={styles.details}>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>category: {category}</p>
                <p>{price} $</p>
                <Link to="/products"> Back to shop </Link>
            </div>
        </div>
    );
};

export default ProductDetails;