import React from 'react';
import Login from './components/Login';
import Register from './components/register';
import Home from './components/Home';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
    );
}
export default App;