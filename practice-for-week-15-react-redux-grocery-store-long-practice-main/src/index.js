import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { populateProduce } from './store/produce';
import { receiveItem } from './store/cart';

const theStore = configureStore();


function Root() {
  return (
    <Provider store={theStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== "production") {
  window.winStore = theStore;
  console.log('hi michael')
  window.populateProduce = populateProduce;
  window.receiveItem = receiveItem;
};