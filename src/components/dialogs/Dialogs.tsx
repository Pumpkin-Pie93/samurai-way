import React, {useReducer, useRef} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/State";

export type DialogsPropsType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const messages = props.messages.map(message => <Message message={message.message}/>)

    let textAreaRef = useRef<HTMLTextAreaElement>(null)

    const onClickHandler = () => {
        if (textAreaRef.current !== null) {
            alert(textAreaRef.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                <div className={s.textAreaAndButton}>
                    <textarea ref={textAreaRef}/>
                    <button onClick={onClickHandler}>add message</button>
                </div>

            </div>
        </div>

    )
}