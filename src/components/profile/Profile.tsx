import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            <img className={s.adam} alt={'creation-adam'} src={'https://cdn.thecollector.com/wp-content/uploads/2022/03/michelangelo-creation-adam-detail-featured.jpg?width=1400&quality=70'}/>
            <div >
                <div> ava + description</div>
                <MyPosts/>
            </div>

        </div>
    );
};

