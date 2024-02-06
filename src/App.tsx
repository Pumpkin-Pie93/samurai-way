import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/nav/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
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
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
