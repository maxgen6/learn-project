import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalStyle} from "styled-components";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: Inter;
  }
`

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Global />
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
