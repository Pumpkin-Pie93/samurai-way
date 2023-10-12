import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to = '/dialogs/1'>Veronica</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Vika</NavLink>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Kiryll</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Alya</NavLink>
                </div>
            </div>
                   </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?)</div>
                <div className={s.message}>What are you doing? Maybe we can meet today?</div>
            </div>
        </div>)
}