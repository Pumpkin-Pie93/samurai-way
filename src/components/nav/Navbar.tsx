import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsItemsType} from "../../redux/State";
import {Friends} from "../friends/Friends";

type NavBarPropsType = {
    friends: FriendsItemsType[]
}

export const Navbar = (props:NavBarPropsType) => {
    return (
        <div>
            <div>
                <nav className={s.nav}>
                    {/*<div className={s.item}><NavLink to="/profile"  className={({ isActive}) => (isActive ? s.active : '')}>Profile</NavLink></div>*/}
                    <div className={s.item}><NavLink to="/profile"  activeClassName={s.active}>Profile</NavLink></div>
                    <div className={s.item}><NavLink to="/users"  activeClassName={s.active}>Users</NavLink></div>
                    <div className={s.item}><NavLink to="/dialogs"  activeClassName={s.active}>Messages</NavLink></div>
                    <div className={s.item}><NavLink to="/news"  activeClassName={s.active}>News</NavLink></div>
                    <div className={s.item}><NavLink to="/music"  activeClassName={s.active}>Music</NavLink></div>
                    <div className={s.item}><NavLink to="/settings"  activeClassName={s.active}>Settings</NavLink></div>
                    <div>
                        <Friends friends={props.friends}/>
                    </div>
                </nav>

            </div>

        </div>

    );
};

