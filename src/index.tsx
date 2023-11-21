import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppStateType, store} from "./redux/redux-store";
import myState from "./redux/State"
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/State";

export const renderTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}  dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
       ,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

// serviceWorker.unregister

