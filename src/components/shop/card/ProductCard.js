import React from 'react';
import styles from "./ProductCard.module.scss";
import { Link } from 'react-router-dom';
const ProductCard = ({item}) => {
    return (
        <div>
            {console.log(item)}
            <div className={styles.PluginCard}>
                <div><img alt={item.title} src={item.image} /></div>
                <div className={styles.Details}>
                    <h3 className={styles.Title}>
                    {item.title}
                    <Link to={`/products/${item.id}/`}>{item.title}</Link>
                    </h3>
                    <p className={styles.Description}>{item.price.main}</p>
                </div>
                <div className={styles.Status}>
                    {/* <PluginStatus status={item.status} onChanged={x}/> */}
                </div>
        </div>
        </div>
    );
};

export default ProductCard;