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
import {store, StateType, StoreType} from "./redux/State";

type AppPropstype = {
    store: StoreType
    dispatch: (action: any) => void

}


function App(props: AppPropstype) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.store.getState().sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={props.store.getState().dialogsPage.dialogsData}
                                                 messages={props.store.getState().dialogsPage.messagesData}
                                                 store={props.store}/>}/>
                        <Route path='/profile' element={<Profile posts={props.store.getState().postsPage.postsData}
                                                                 dispatch={props.dispatch}
                                                                 newPostText={props.store.getState().postsPage.newPostText}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
