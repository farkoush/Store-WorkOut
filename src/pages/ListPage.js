import React, {useEffect, useState} from 'react';
import { ProductsGrid } from '../components';
import styles from "./ListPage.module.scss";

const ListPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setIsLoading(false);
    //     }
    //     fetchAPI();
    // },[])
    
    return (
        <div  className={styles.ListPage}>
            {/* {isLoading && <p>Loading</p>}
            {!isLoading && */}
                <ProductsGrid/>
            {/* } */}
        </div>
    );
};

export default ListPage;