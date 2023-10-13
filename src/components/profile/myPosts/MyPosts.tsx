import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <div >
                    <div>
                        <textarea placeholder={'Enter your text here'}></textarea>
                    </div>
                    <div className={s.btnWrapper}>
                        <button>add post</button>
                        <button>remove post</button>
                    </div>

                </div>

            </div>
            <div className={s.posts}>
                <Post message={'Hi,it\'s my first post'}/>
                <Post message={'How are you?'}/>
            </div>
        </div>

    );
};

