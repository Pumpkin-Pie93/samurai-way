import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store, StoreType} from "./redux/State";

type RerenderPropsType = {
    store: StoreType
}


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

//
// type  AppPropsType = {
//     state: StateType
//     addPost: ()=> void
// }

// ReactDOM.render(
//         <App state={state} addPost={addPost}/>,
//   document.getElementById('root')
// );

