import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { ProductContext } from './contexts/ProductContext';
import ShowCartDropDown  from './contexts/ShowCartDropDown.js'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <ProductContext>
          <ShowCartDropDown>
            <App />
          </ShowCartDropDown>
        </ProductContext>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);

