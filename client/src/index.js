import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //component that we are going to wrap around our application
import { Provider } from 'react-redux'; //provider is a component to wrap around the entire application bc we want everything inside it have access to this store object that we get from redux
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  //parent of everything inside our application
  //allow us to get access to all of the things related to the store
  //that we going to put all of the actual code we want to store on our redux stage
  <Provider store={store}>
    {/*give <App> functionality of routing*/}
    <BrowserRouter>
      {/* let application have access to persistence flow itself */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register();

