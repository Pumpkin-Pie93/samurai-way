import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsData, PostsDataType} from "../Profile";

type PostsPropsType = {
    data: PostsDataType[]
}


export const MyPosts = (props: PostsPropsType) => {

    const posts = props.data.map( p => <Post message={p.message} likes={p.likes}/>)

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
                {posts}
            </div>
        </div>

    );
};

