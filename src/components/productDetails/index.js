import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom'
//context
import { ProductsContext } from 'context';

import styles from './productDetails.module.scss'
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
        <div className={styles.container}>
            <div className={styles.thumbnail}><img  className={styles.image} alt="" src={image}/></div>
            <div className={styles.textContainer}>
                <h1>{title}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>category: {category}</p>
                <div className={styles.buttonContainer}>
                    <p className={styles.price}>{price} $</p>
                    <Link to="/products"> Back to shop </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;