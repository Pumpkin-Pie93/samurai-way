import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.adam} alt={'creation-adam'} src={'https://cdn.thecollector.com/wp-content/uploads/2022/03/michelangelo-creation-adam-detail-featured.jpg?width=1400&quality=70'}/>
            </div>
            <div className={s.description}>
                <div> ava + description</div>
            </div>
        </div>
    );
};

