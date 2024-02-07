import React from 'react';
import {UsersPropsType} from "./Users-container";
import s from './Users.module.css'
import axios from "axios";

export const Users = (props: UsersPropsType) => {

if(props.users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((res:any)=>{
            debugger
            props.setUsers(res.data.items)
        })
}

    let users = props.users

    return (
        <div className={s.wrapper}>
            {users.map((user) => {
                return (
                        <div key={user.id} className={s.userContainer}>
                            <div className={s.iconContainer}>
                                <div>
                                    {user.photos.large?<img src={user.photos.large}/>:<div>photo</div>}
                                </div>
                                {user.followed
                                    ? <button onClick={()=>props.unfollow(user.id)}>Unfollow</button>
                                    :<button onClick={()=>props.follow(user.id)}>Follow</button>}
                            </div>
                            <div className={s.Content}>
                            <div className={s.statusContainer}>
                                <h2>{user.name}</h2>
                                    {/*<span>{user.location.country},<br/>{user.location.city}</span>*/}
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

