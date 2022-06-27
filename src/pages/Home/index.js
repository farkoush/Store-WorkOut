import React, {useEffect, useState} from 'react';
import { ProductsGrid } from 'components';
import styles from "./index.module.scss";

const HomePage = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setIsLoading(false);
    //     }
    //     fetchAPI();
    // },[])
    
    return (
        <div  className={styles.HomePage}>
            {/* {isLoading && <p>Loading</p>}
            {!isLoading && */}
                <ProductsGrid/>
            {/* } */}
        </div>
    );
};

export default HomePage;