import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware,compose, combineReducers} from "redux";
import reducer from "./Store/Reducer";
import navreducer from "./Store/NavReducer";
import comparereducer from "./Store/CompareReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    reducer:reducer,
    navreducer:navreducer,
    comparereducer:comparereducer
})
const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
const app=(
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter></Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
