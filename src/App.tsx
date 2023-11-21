import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/nav/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import { StateType, StoreType} from "./redux/State";
import {store} from "./redux/redux-store";

type AppPropstype = {
    store: any
    state: StateType
    dispatch: (action: any) => void

}


function App(props: AppPropstype) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.store.getState().sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={props.store.getState().dialogsPage.dialogsData}
                                                 messages={props.store.getState().dialogsPage.messagesData}
                                                 store={props.store}/>}/>
                        <Route path='/profile' element={<Profile store={props.store}
                        />}/>
                        {/*<Route path='/profile' element={<Profile posts={props.store.getState().postsPage.postsData}*/}
                        {/*                                         dispatch={props.store.dispatch}*/}
                        {/*                                         newPostText={props.store.getState().postsPage.newPostText}*/}
                        {/*/>}/>*/}
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
