import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostItemType, PostsPageType} from "../../redux/State";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {AppStateType, ReducersType} from "../../redux/redux-store";


export type ProfilePropsType = {
    // posts: PostItemType[]
    // dispatch: (action:any) => void
    // newPostText: any
    store: any
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

