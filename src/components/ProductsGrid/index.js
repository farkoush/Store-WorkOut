import React, {useContext} from 'react';
import {ProductCard} from '../index';
import styles from './ProductsGrid.module.scss';

import {ProductsContext} from 'context'
const ProductsGrid = () => {
    const products = useContext(ProductsContext);
    if (products === undefined) return <div>Loading...</div>;
    return (
        <div className={styles.container}>
            <div className= {styles.ProductsGridContainer}>
                {products?.map((item) => {
                    return (
                            <div key={(item.id).toString()} className= {styles.ProductItem}>
                                <ProductCard item = {item}/>
                            </div>                        
                    )
                })}
            </div>
        </div>
    );
};

export default ProductsGrid;