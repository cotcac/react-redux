import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// react redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';

const logAction = store =>{
    return next =>{
        return action =>{
            const result = next(action)
            console.log(`Caught in the middleware: ${JSON.stringify(result)}`, );
            
        }
    }
}


const store = createStore(reducer, applyMiddleware(logAction));
// make store avaibale for the whole application.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('root'));

