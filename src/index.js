import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { render } from 'react-dom'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '30px',
  transition: transitions.FADE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options} >
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
