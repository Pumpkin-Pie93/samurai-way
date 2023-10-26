import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostItemType, PostsPageType} from "../../redux/State";


export type ProfilePropsType = {
    posts: PostItemType[]
}

export const Profile = (props:ProfilePropsType) => {
        return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

