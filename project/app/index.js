import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'availity-uikit/scss/_bootstrap.scss';
import './index.scss';
import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
