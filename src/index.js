import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Loading />
  </Provider>,
  document.getElementById('root')
);
