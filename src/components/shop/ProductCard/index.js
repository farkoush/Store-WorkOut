import React from 'react';
import styles from "./index.module.scss";
import { Link } from 'react-router-dom';
const ProductCard = ({item}) => {
    return (
        <div>
            {console.log(item)}
            <div className={styles.ProductCardContainer}>
                <div className={styles.Thumbnail}><img alt={item.title} src={item.image} /></div>
                <div className={styles.Details}>
                    <h3 className={styles.Title}>
                        {item.title}
                    </h3>
                    <p className={styles.Description}>{item.price}</p>
                </div>
                <Link to={`/products/${item.id}/`}>Details</Link>
                <button>Add to Cart</button>
        </div>
        </div>
    );
};

export default ProductCard;