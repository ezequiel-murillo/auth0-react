import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <Auth0Provider
    domain=""
    clientId=""
    redirectUri={window.location.origin}
    audience="">

    <App />

  </Auth0Provider>,
  document.getElementById('root')
);

