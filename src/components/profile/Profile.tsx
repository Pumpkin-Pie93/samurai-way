import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

export const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} myProfile={props.myProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

