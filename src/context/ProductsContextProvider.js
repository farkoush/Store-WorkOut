import React, {useState,createContext, useEffect} from 'react';
import getApi from 'services/api';

export const ProductsContext = createContext()
const ProductsContextProvider = (props) => {
    const [products,setProducts] = useState();
    useEffect(() => {
        const fetchAPI = async () => {
            const getProducts = await getApi();
            setProducts(getProducts);
        }
        fetchAPI();
    },[])
    return (
        <ProductsContext.Provider value ={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;