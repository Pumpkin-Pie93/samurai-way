import React from 'react';
import s from './Post.module.css';

export const Post = (props: any) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img alt={'avatar'}
                     src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Sibyl_of_Delphi_-_Sistine_Chapel_-_closeup.JPG"}
                />
                {props.message}
                <div>
                    <span>likes: {props.likes}</span>
                </div>
            </div>
        </div>

    );
};

