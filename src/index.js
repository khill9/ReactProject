import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Loading />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
