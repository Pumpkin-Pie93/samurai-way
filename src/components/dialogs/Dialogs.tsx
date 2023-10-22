import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


const dialogsData = [
    {id: 1, name: 'Kiryll'},
    {id: 2, name: 'Veronica'},
    {id: 3, name: 'Vika'},
    {id: 4, name: 'Tanya'},
    {id: 5, name: 'Alya'}
]

const messagesData = [
    {id: 1, message: 'What\'s up?'},
    {id: 2, message:  'Do you go to the party tonight?'},
    {id: 3, message: 'I\'ve bot something special!'},
    {id: 4, message: 'Polinaaaa!, Go to Hooka'},
    {id: 5, message: 'That is quite'}
]

const dialogs = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
const messages = messagesData.map( message => <Message message={message.message}/>)

export const Dialogs = (props: any) => {
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