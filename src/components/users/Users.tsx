import React from 'react';
import {UsersPropsType} from "./Users-container";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/ava.jpg'

export class Users extends React.Component<UsersPropsType> {
     componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((res: any) => {
            this.props.setUsers(res.data.items)
        })
    }
    render() {

         let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        return (
            <>
                {pages.map((p)=>{
                    return <span
                        className={this.props.currentPage === p ? s.selectedPage:''}
                        onClick={()=>this.props.setCurrentPage(p)}
                    >{p + ' '}
                    </span>})
                }
                <div className={s.wrapper}>
                    {this.props.users.map((user) => {
                        return (
                            <div key={user.id} className={s.userContainer}>
                                <div className={s.iconContainer}>
                                    <div>
                                        {user.photos.small ? <img src={user.photos.small}/> : <img src={userPhoto}></img>}
                                    </div>
                                    {user.followed
                                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }

};

