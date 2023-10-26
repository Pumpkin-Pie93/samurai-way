import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
    avatar: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogsWrapper}>
            <img className={s.avatarImg } alt={'friends avatar'} src={props.avatar}/>
            <div className={s.dialog + ' ' + s.active}>

                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>

    )
}
