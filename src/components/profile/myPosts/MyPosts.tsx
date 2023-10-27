import React, {useRef} from 'react';
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

    const newPost = useRef<HTMLTextAreaElement>(null)

    const addNewPost = () => {
    if(newPost.current !== null) {
    alert(`Вы добавили пост: ${newPost.current.value}`)
}
    }

    return (
        <div>
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <div >
                    <div>
                        <textarea ref={newPost} placeholder={'Enter your text here'}></textarea>
                    </div>
                    <div className={s.btnWrapper}>
                        <button onClick={addNewPost}>add post</button>
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

