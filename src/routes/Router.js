import React from 'react';
import { SignUp, Login, ProductsGrid, ProductDetails} from '../components'
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
    const Routers = [
        {
            component : <SignUp/>,
            path : '/signup',
            isPrivate : false  
        },
        {
            component : <Login/>,
            path : '/login' ,
            isPrivate : false  
        },
        {
            component : <ProductsGrid />,
            path: '/products',
            isPrivate : false  
        },
        {
            component : <ProductDetails />,
            path: '/products/:id',
            isPrivate : false  
        },
        {
            component : <Navigate to ="/signup" />,
            path: '*',
            isPrivate : false  
        }
    ];
    return (
        <>
            <Routes>
                {Routers.map(({ component, path, isPrivate }, index) =>
                    isPrivate ? (<div>Private</div>)
                    : (<Route key={index} path={path} element={component} />)
                )}
            </Routes>
        </>
    );
};

export default Router;