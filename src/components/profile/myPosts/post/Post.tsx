import React, {useState} from 'react';
import s from './Post.module.css';

export const Post = (props: any) => {

    const [likes, setLikes] = useState(props.likes)

    const onClickHandler = () => {
        setLikes(likes +1)
    }


    return (
        <div className={s.post}>
            <div className={s.item}>
                <img alt={'avatar'}
                     src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Sibyl_of_Delphi_-_Sistine_Chapel_-_closeup.JPG"}
                />
                {props.message}
                <div className={s.likes}>
                    <button onClick={onClickHandler}>like</button>
                    <span>likes: {likes}</span>
                </div>
            </div>
        </div>

    );
};

