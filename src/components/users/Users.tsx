import React from 'react';
import {UsersPropsType} from "./Users-container";
import s from './Users.module.css'
export const Users = (props:UsersPropsType) => {

    let users = props.users

    return (
        <div>
            {  users.map((user)=>{
                    return(
                            <li key={user.id}>
                                <div className={s.userContainer}>
                                    <div className={s.iconContainer}>
                                        <h1>{user.fullName}</h1>
                                        {user.followed? <button>unfollowed</button> : <button>followed</button>}
                                    </div>
                                    <div className={s.statusContainer}>
                                        <span>{user.status}</span>
                                    </div>
                                    <div className={s.locationContainer}><span>{user.location.country}<br/>{user.location.city}</span></div>
                                </div>
                            </li>
                        )
                })
            })
            <div>
                <button>more</button>
            </div>
        </div>
    );
};

