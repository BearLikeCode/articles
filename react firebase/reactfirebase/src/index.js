import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from 'firebase/app';
import './index.css';
import App from './App';
import { store } from './store/index';
import reportWebVitals from './reportWebVitals';

const rrfProps = {
  firebase,
  config: {
    userProfile: "users" 
  },
  dispatch: store.dispatch
};

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReactReduxFirebaseProvider>
    </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
