import ProductsContextProvider from './context/ProductsContextProvider';
import Router from './routes/Router';
function App() {
  return (
    <ProductsContextProvider>
      <Router />
    </ProductsContextProvider>
  );
}

export default App;
