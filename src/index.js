import React from 'react';
import { positions, Provider } from "react-alert";
import { render } from 'react-dom'
import AlertMUITemplate from "react-alert-template-mui";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const options = {
  position: positions.MIDDLE,
}

const Root = () => (
  <Provider template={AlertMUITemplate} {...options} >
    <App />
  </Provider>
)

render(<Root />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
