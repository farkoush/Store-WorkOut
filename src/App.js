import {Login, SignUp, ProductGrid, ProductCard} from './components/index'
import { Routes, Route, Link, Navigate } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Navigate to ="/signup" />} /> */}
        <Route path = "/" element = {<ProductGrid/>}/>
      </Routes>
    </div>
  );
}

export default App;
