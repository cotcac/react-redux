import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// react redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducer';
import {watchAgeUp} from './saga/saga'
const sagaMiddleware = createSagaMiddleware();



const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
// make store avaibale for the whole application.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('root'));

