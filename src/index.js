import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/styles.scss';
import reportWebVitals from './reportWebVitals';

import MainRouter from './routes';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far)

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
