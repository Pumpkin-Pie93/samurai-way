import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StateType, addPost} from "./redux/State";
import {rerenderEntireTree} from "./Rerender";


rerenderEntireTree(state)

//
// type  AppPropsType = {
//     state: StateType
//     addPost: ()=> void
// }

// ReactDOM.render(
//         <App state={state} addPost={addPost}/>,
//   document.getElementById('root')
// );

