import {Login, SignUp} from './components/index'
import { Routes, Route} from 'react-router-dom';


import './App.css';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Navigate to ="/signup" />} /> */}
        <Route path = "/" element = {<ListPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
