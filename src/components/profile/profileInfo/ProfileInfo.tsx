import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus';
import {UserProfileResponseType} from "../../../redux/Profile-reducer";

//types
export type ProfileInfoProps = {
    profile: UserProfileResponseType
    status: string
    updateStatus: (newStatus: string) => void
}

//component
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
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.small
                    ? props.profile.photos.small
                    :'https://sun9-14.userapi.com/impf/zbNSI7cuoxPKPv57ABtzu3JTL-iVoklYRbiYhA/Wzn22c-XTK0.jpg?size=400x300&quality=96&sign=f63c8984aa34fcfe6097946c107f9111&type=album'}/>
                <div className={s.description}>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                    {/*<span>{`FullName: ${props.profile.fullName}`}</span><br/>*/}
                    {/*<span>{`AboutMe: ${props.profile.aboutMe}`}</span><br/>*/}
                    {/*<span>{`LookingForAJob: ${props.profile.lookingForAJob}`}</span>*/}
                </div>
            </div>
        </div>
    );
};

