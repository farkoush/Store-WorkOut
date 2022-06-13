import React, {useEffect, useState} from 'react';
import { ProductGrid } from '../components';
import getApi from  '../services/api'

const ListPage = () => {
    // https://api.malltina.net/search/v2?q=apple
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const serviceResult = getApi('test');
        serviceResult.then(data => {
            setIsLoading(false);
            setData(data);
        });
    },[isLoading])
    
    return (
        <div>
            {isLoading && <p>Loading</p>}
            {!isLoading &&
                <ProductGrid data = {data}/>
            }
        </div>
    );
};

export default ListPage;