/**
 *
 * This is the entry point for an application
 *
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import { ConnectedRouter } from 'connected-react-router';
import AppShell from 'Containers/appShell/AppShell';
import { configureStore, history } from 'Containers/appShell/configureStore';
import { getLocalStorage } from 'Utils/index';

const MOUNT_NODE = document.getElementById('root');
const store = configureStore({});
if (getLocalStorage('watchList')) {
  store.dispatch({
    type: 'ADD_TO_WATCH_LIST',
    payload: getLocalStorage('watchList'),
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <AppShell />
        </div>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

declare var module: { hot: any };

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./containers/appShell/AppShell', () => {
    render();
  });
}

render();
