import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// Ya no lo usamos, porque importamos el componente conectado en lugar del componente tal cual
/* import Counter from "./components/Counter"*/
import CounterContainer from "./containers/Counter"

import { counterApp } from "./reducers/index.js";
import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(counterApp);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CounterContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
