import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img
                    src={'https://static.vecteezy.com/system/resources/previews/022/841/114/original/chatgpt-logo-transparent-background-free-png.png'}/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className={'content'}>
                <img src={'https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg'}/>
                <div> ava + description</div>
                <div> My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>

            </div>
        </div>
    );
}

export default App;
