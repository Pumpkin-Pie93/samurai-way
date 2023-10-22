import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {DialogsDataType, MessagesDataType, PostsDataType} from "../../index";


export type ProfilePropsType = {
    posts:PostsDataType[]
}

export const Profile = (props:ProfilePropsType) => {
        return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

