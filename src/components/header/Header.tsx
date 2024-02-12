import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



export const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img
                src={'https://static.vecteezy.com/system/resources/previews/022/841/114/original/chatgpt-logo-transparent-background-free-png.png'}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ?<div>{props.login}</div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    );
};

type HeaderPropsType = {

}