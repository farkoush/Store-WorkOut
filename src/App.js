import { Routes, Route, Navigate, useParams } from 'react-router-dom';

//components
import {Login, SignUp, ProductDetails, ProductsGrid} from './components/index'
import ListPage from './pages/ListPage';

import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path = "/products" element = {<ProductsGrid/>}/>
          <Route path = "/products/:id" element = {<ProductDetails/>}/>
          <Route path="*" element={<Navigate to ="/signup" />} />
        </Routes>
    </ProductsContextProvider>
  );
}

export default App;
