import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App';
import './index.css'
import "./responsive.css";

ReactDOM.createRoot(document.querySelector('[data-js="root"]')).render(
  <GoogleOAuthProvider clientId="1085139553267-r583v3v8h5fkn9n6545787cmc0rtguh9.apps.googleusercontent.com">
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </GoogleOAuthProvider>
)
