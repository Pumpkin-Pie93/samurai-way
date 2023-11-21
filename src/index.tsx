import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppStateType, store} from "./redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const renderTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
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

