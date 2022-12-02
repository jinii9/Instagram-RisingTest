import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const root = createRoot(document.getElementById("root"));

const store = createStore(RootReducer, composeWithDevTools());

root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
  // document.getElementById('root')
);


