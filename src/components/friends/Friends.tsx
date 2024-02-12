import React from 'react';
import {FriendsItemsType} from "../../redux/Store";
import s from './Friends.module.css'

export type FriendsPropsType = {
    friends: FriendsItemsType[]
}

export const Friends = (props:FriendsPropsType) => {
    return (
        <div className={s.titleAndItems}>
            <h1>Friends</h1>
            <div className={s.friendsWrapper}>{
                props.friends.map((el,i )=> {
                    return (
                        <div key={i}
                             className={s.friendAvaAndName}>
                            <div className={s.imgAva}>
                                <img src={el.avatar}/>
                            </div>
                            <div>{el.name}</div>
                        </div>
                    )
                })
            }

            </div>
        </div>

    );
};

