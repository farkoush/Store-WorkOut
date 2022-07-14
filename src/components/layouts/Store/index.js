import React from 'react';
import {Header} from '../index';
import styles from './Store.module.scss';
import { MainContainer, ProductsGrid } from 'components';

const StoreLayout = ({ component }) => {
    const options = {
        Logo : 'off',
        Menu: 'on',
        SearchBar: 'on',
        ShopIcons : 'on',
    }
    return (
        <div className={styles.container}>
                <Header options = {options} layout = 'store' />
                {/* {component} */}
                <MainContainer  className={styles.HomePage}>
                <ProductsGrid/>
                </MainContainer>
            </div>
    );
};

export default StoreLayout;