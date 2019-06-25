import React from 'react';
import { render } from 'react-dom';
import { createHistory, LocationProvider } from '@reach/router';
import createHashSource from 'hash-source';
import 'availity-uikit';
import App from './App';

const source = createHashSource();
const history = createHistory(source);

render(
  <LocationProvider history={history}>
    <App />
  </LocationProvider>,
  document.querySelector('#root')
);