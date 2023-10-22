import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const postsData:PostsDataType[] = [
    {id: 1, message: 'Hi,it\'s my first post', likes: 33},
    {id: 2, message: 'How are you?', likes: 17}
]
export type PostsDataType = {
    id: number
    message: string
    likes: number
}

export const Profile = (props:PostsDataType[]) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={postsData}/>
        </div>
    );
};

