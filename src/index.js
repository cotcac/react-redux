import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// react redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);
// make store avaibale for the whole application.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('root'));

