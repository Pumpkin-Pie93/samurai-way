import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostItemType, PostsPageType} from "../../redux/State";


export type ProfilePropsType = {
    posts: PostItemType[]
    addPost: ()=> void
    updateNewPostText: (newText: any) => void
    newPostText: any
}

export const Profile = (props:ProfilePropsType) => {
        return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        </div>
    );
};

