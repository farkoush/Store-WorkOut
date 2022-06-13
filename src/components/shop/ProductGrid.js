import React from 'react';
import {ProductCard} from '../index';
import styles from './ProductGrid.module.scss';

const ProductGrid = ({data}) => {

    return (
        <div >
            <h1>Product Grid</h1>
            <div className= {styles.ProductList}>
                {data?.map((item) => {
                    return (
                        <>
                            <div key={item.id}>
                                <ProductCard item = {item} className= {styles.ProductItem} />
                            </div>
                        </>
                        
                    )
                })}
            </div>
        </div>
    );
};

export default ProductGrid;