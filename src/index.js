import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext.js';
import ShowCartDropDown  from './contexts/ShowCartDropDown.js'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <CategoriesProvider>
          <ShowCartDropDown>
            <App />
          </ShowCartDropDown>
        </CategoriesProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);

