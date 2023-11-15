import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StateType, store, StoreType} from "./redux/State";
import App from "./App";

export const renderTree = (store: StoreType) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
renderTree(store)
store.subscribe(()=>renderTree(store))

// serviceWorker.unregister

