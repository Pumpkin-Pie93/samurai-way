import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StateType} from "./redux/State";


type  AppPropsType = {
    state: StateType
}

ReactDOM.render(
        <App state={state}/>,
  document.getElementById('root')
);