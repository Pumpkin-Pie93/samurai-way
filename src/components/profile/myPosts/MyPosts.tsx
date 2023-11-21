import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostItemType} from "../../../redux/State";

type MyPostsPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
    posts: PostItemType[]
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    const posts = props.posts.map((p, index) => (<Post key={index} message={p.message} likes={p.likes}/>))

    const newPostText = useRef<HTMLTextAreaElement>(null)
    // let newPostText = React.createRef()

    const addNewPost = () => {
        props.addPost()

    }

    const onChangeHandler = () => {
        if (newPostText.current !== null) {
            let newText = newPostText.current.value
            props.updateNewPostText(newText)
        }
    }

    return (
        <div>
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostText}
                                  onChange={onChangeHandler}
                                  value={props.newPostText}
                                  placeholder={'Enter your text here'}></textarea>
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

