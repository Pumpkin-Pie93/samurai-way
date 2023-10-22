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
import {DialogsDataType, MessagesDataType, PostsDataType} from "./index";

export type AppPropsType = {
    posts: PostsDataType[]
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
}

function App(props: any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path ='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path ='/profile' element={<Profile  posts={props.posts}/>}/>
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
