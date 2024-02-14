import React from 'react';
import './App.css';
import {Navbar} from "./components/nav/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import {Route} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {store} from "./redux/redux-store";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/Users-container";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar friends={store.getState().sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' component={ProfileContainer}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/news' component={News}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                {/*<Route path='/login' component={Login}/>*/}
            </div>
        </div>
    );
}
export default App;
