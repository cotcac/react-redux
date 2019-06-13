import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// react redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));
// make store avaibale for the whole application.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('root'));

