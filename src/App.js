import { ProductsGrid } from './components';
import CartContextProvider from './context/CartContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import Router from './routes/Router';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        {/* <Router /> */}
        <ProductsGrid />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
