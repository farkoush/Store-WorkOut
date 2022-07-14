import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { CartContext } from 'context';
import { cartIcon } from 'assets/svgs';
import { Logo, Menu ,SearchBar, ShopIcons } from './components';
import { MainContainer } from 'components';

const Navbar = ({options}) => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <MainContainer>
                <div className={styles.wrapper}>
                    {
                        options.Logo === 'on' && <Logo />
                    }
                    {
                        options.Menu === 'on' && <Menu />
                    }
                    {
                        options.SearchBar === 'on' && <SearchBar />
                    }
                    {
                        options.ShopIcons === 'on' && <ShopIcons />
                    }
                </div>
            </MainContainer>
        </div>
    );
};

export default Navbar;