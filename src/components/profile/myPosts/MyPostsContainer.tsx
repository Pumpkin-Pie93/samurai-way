import React from 'react';
import {AddNewPostAC, UpdateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    // posts: PostItemType[]
    // dispatch: (action:any) => void
    // newPostText: any
    store: any
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState()
    const addNewPost = () => {
        props.store.dispatch(AddNewPostAC())
        props.store.dispatch(UpdateNewPostTextAC(''))
    }
    const onChangeHandler = (newText: string) => {
        props.store.dispatch(UpdateNewPostTextAC(newText))
    }

    return (
       <MyPosts updateNewPostText={onChangeHandler} addPost={addNewPost} posts={state.postsPage.postsData} newPostText={state.postsPage.newPostText}/>
    );
};

