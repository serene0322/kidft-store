import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //component that we are going to wrap around our application
import { Provider } from 'react-redux'; //provider is a component to wrap around the entire application bc we want everything inside it have access to this store object that we get from redux

import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  //parent of everything inside our application
  //allow us to get access to all of the things related to the store
  //that we going to put all of the actual code we want to store on our redux stage
  <Provider store={store}>
    {/*give <App> functionality of routing*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

