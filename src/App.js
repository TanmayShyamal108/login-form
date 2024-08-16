import logo from './logo.svg';
import './App.css';
// import useNavigate from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import ProductPage from './component/ProductPage';

import Home1 from './component/Home1';


function App() {
  return (

    <div >
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home1 />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/product/:id' element={<ProductPage />}></Route>
          </Routes>

        </main>

      </BrowserRouter>

    </div>
  );
}

export default App;
