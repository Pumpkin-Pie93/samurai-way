import React from 'react';
import {UsersPropsType} from "./Users-container";
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    let users = props.users

    const onclickHandler = (id: number) => {

    }

    return (
        <div className={s.wrapper}>
            {users.map((user) => {
                return (
                        <div key={user.id} className={s.userContainer}>
                            <div className={s.iconContainer}>
                                <div>
                                    <img src={user.avatar}/>
                                </div>
                                <button
                                    onClick={() => onclickHandler(user.id)}>{user.followed ? 'unfollowed' : 'followed'}</button>
                            </div>
                            <div className={s.Content}>
                            <div className={s.statusContainer}>
                                <h2>{user.fullName}</h2>
                                    <span>{user.location.country},<br/>{user.location.city}</span>
                            </div>
                                {/*<div className={s.locationContainer}>*/}
                                <div className={s.status}>{user.status}</div>
                                </div>
                            {/*</div>*/}
                        </div>
                )
            })
            }
            <div className={s.button}>
                <button>Show more</button>
            </div>
        </div>
    );
};

