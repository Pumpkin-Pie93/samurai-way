import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My posts
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                    <button>remove post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={'Hi,it\'s my first post'}/>
                <Post message={'How are you?'}/>
            </div>
        </div>

    );
};

