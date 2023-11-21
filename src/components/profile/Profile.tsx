import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


// export type ProfilePropsType = {
//     // posts: PostItemType[]
//     // dispatch: (action:any) => void
//     // newPostText: any
//     // store: any
// }

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

