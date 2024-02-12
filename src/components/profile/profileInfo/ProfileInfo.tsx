import React from 'react';
import s from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/State";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoProps = {
    profile: UserProfileType
}

export const ProfileInfo = (props:ProfileInfoProps) => {

    if (!props.profile){
        return <Preloader/>
    }
        return (
        <div>
            <div>
                <img className={s.adam} alt={'creation-adam'}
                     src={'https://cdn.thecollector.com/wp-content/uploads/2022/03/michelangelo-creation-adam-detail-featured.jpg?width=1400&quality=70'}/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large?props.profile.photos.large:'https://pbs.twimg.com/media/EYXMYp4WsAAUJwz.jpg'}/>
                <div> ava + description</div>
            </div>
        </div>
    );
};

