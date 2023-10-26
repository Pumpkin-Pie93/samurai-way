import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostItemType} from "../../../redux/State";
// import {PostsDataType} from "../../../index";
// import {postsData, PostsDataType} from "../Profile";

type MyPostsPropsType = {
    posts: PostItemType[]
}


export const MyPosts = (props: MyPostsPropsType) => {

    const posts = props.posts.map( (p, index)=> (<Post key={index} message={p.message} likes={p.likes}/>))

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

