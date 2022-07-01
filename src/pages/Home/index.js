import React, {useEffect, useState} from 'react';
import { MainContainer, ProductsGrid } from 'components';
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
        <MainContainer  className={styles.HomePage}>
            {/* {isLoading && <p>Loading</p>}
            {!isLoading && */}
                <ProductsGrid/>
            {/* } */}
        </MainContainer>
    );
};

export default HomePage;