import React, {useContext} from 'react';
import {ProductCard} from '../../index';
import styles from './index.module.scss';

import {ProductsContext} from '../../../context/ProductsContextProvider'
const ProductsGrid = () => {
    const products = useContext(ProductsContext)
    return (
        <div >
            <h1>Product Grid</h1>
            <div className= {styles.ProductsGridContainer}>
                {products?.map((item) => {
                    return (
                        <>
                            <div key={item.id} className= {styles.ProductItem}>
                                <ProductCard item = {item}/>
                            </div>
                        </>
                        
                    )
                })}
            </div>
        </div>
    );
};

export default ProductsGrid;