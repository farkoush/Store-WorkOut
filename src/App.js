import { BrowserRouter } from "react-router-dom";
import CartContextProvider from './context/CartContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import Router from './routes/Router';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
