import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import {UserType} from "../../redux/State";

//types
type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p:number) => void
    unfollow: (userId:number) => void
    follow: (userId:number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    // for(let i = 1; i <= pagesCount; i++){
    //     pages.push(i)
    // }
    if (props.currentPage >= 2) {
        for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === 1) {
        for (let i = props.currentPage; i <= props.currentPage + 2; i++) {
            pages.push(i)
        }
    }
    return (
        <>
            {pages.map((p) => {
                return <span
                    className={props.currentPage === p ? s.selectedPage : s.pages}
                    onClick={(e) => props.onPageChanged(p)}
                >{p + ' '}
                    </span>
            })
            }
            <div className={s.wrapper}>
                {props.users.map((user) => {
                    return (
                        <div key={user.id} className={s.userContainer}>
                            <div className={s.iconContainer}>
                                <div>
                                    {user.photos.small ? <img src={user.photos.small}/> : <img src={userPhoto}></img>}
                                </div>
                                {user.followed
                                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
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
        </>
    );
};

