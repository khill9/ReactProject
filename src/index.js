import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
