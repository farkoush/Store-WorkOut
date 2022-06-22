import React from 'react';
import {Header} from '../index';

const StoreLayout = ({ component }) => {
    return (
        <div>
            <Header />
            {component}
        </div>
    );
};

export default StoreLayout;