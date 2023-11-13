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
import {store, StateType} from "./redux/State";

type AppPropstype = {
    state: StateType
    addPost: ()=> void
    updateNewPostText: (newText: any) => void

}


function App(props: AppPropstype) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path ='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogsData}
                                                                  messages={props.state.dialogsPage.messagesData}/>}/>
                        <Route path ='/profile' element={<Profile  posts={props.state.postsPage.postsData}
                                                                   addPost={props.addPost}
                                                                   updateNewPostText={props.updateNewPostText}
                                                                   newPostText={props.state.postsPage.newPostText}
                        />}/>
                        <Route path ='/news' element={<News/>}/>
                        <Route path ='/music' element={<Music/>}/>
                        <Route path ='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
