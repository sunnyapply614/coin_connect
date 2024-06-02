import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
    );
}
export default App;