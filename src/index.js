import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavouitesContextProvider } from './store/favourites-context';

ReactDOM.render(
  <FavouitesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouitesContextProvider>,
  document.getElementById('root')
);
