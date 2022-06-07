import React, {useState} from 'react';
import axios from 'axios';
import {ProductCard} from '../index';
import SearchProductsByTitleService from  '../../SearchProductsByTitleService'
const ProductGrid = () => {
    // https://api.malltina.net/search/v2?q=apple
    const [data, setData] = useState();

    // const instance = axios.create({
    //     baseURL: 'https://api.malltina.net',
    //     timeout: 1000,
    //     headers: {'X-Custom-Header': 'foobar'}
    //     });

    // instance.get('/search/v2', {
    //     params: {
    //       q: 'apple'
    //     }
    //   })
    //   .then(function (response) {
    //     // console.log(response.data.products);
    //     setData(response.data.products)
    //     // console.log(response);
    //   })
    //   .catch(function (error) {
    //     // console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   }); 
    const serviceResult = SearchProductsByTitleService('test');
    serviceResult.then(data => {
      // setIsLoading(false);
      setData(data);
      // setIsListEnd(true);
    });
    // console.log(serviceResult)

    return (
        <div>
            <h1>Product Grid</h1>
            {console.log(data)}
            {data?.map(item => {
                return (
                  <div key={item.id}>
                      <p>{item.title}</p>

                      {/* { {item.items.map(product => {
                          return (
                            <div key={product.id}>
                                <p>{product.title}</p>
                                { <p>path of image{product.img}</p> }
                            </div>
                          );
                      })} } */}
                  </div>
                )
            })}
        </div>
    );
};

export default ProductGrid;