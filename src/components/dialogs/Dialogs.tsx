import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsDataType, MessagesDataType} from "../../index";

export type DialogsPropsType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
}



export const Dialogs = (props: DialogsPropsType) => {
    const dialogs = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messages = props.messages.map( message => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>

    )
}