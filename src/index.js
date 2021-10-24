import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //component that we are going to wrap around our application

import './index.css';
import App from './App';

ReactDOM.render(
  //give <App> functionality of routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

