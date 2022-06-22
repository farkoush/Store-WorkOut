import React from 'react';
import { SignUp, Login, ProductsGrid, ProductDetails} from '../components'
import { Routes, Route, Navigate } from 'react-router-dom';
import {MainLayout, StoreLayout} from '../layouts';
import { HomePage } from '../pages';

const Router = () => {
    const Routers = [
        {
            component : <SignUp/>,
            path : '/signup',
            layout: 'main',
            isPrivate : false  
        },
        {
            component : <Login/>,
            path : '/login' ,
            layout: 'main',
            isPrivate : false  
        },
        {
            component : <HomePage />,
            path: '/products',
            layout: 'store',
            isPrivate : false  
        },
        {
            component : <ProductDetails />,
            path: '/products/:id',
            layout: 'store',
            isPrivate : false  
        },
        {
            component : <Navigate to ="/signup" />,
            path: '*',
            layout: 'main',
            isPrivate : false  
        }
    ];
    return (
        <>
            <Routes>
                {Routers.map(({ component, path,layout, isPrivate }, index) =>{
                        switch (layout) {
                            case 'main':
                                return(
                                    (<Route key={index} path={path} element={<MainLayout component={component}/>} />)
                                )

                            default:
                                return (<Route key={index} path={path} element={<StoreLayout component={component}/>} />)
                        }
                    }
                )}
            </Routes>
        </>
    );
};

export default Router;