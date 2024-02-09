import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/nav/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {Users} from "./components/users/Users";
import {UsersContainer} from "./components/users/Users-container";
//
// type AppPropstype = {
//     store: any
//     state: StateType
//     dispatch: (action: any) => void
//
// }

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={store.getState().sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
