import React, {ChangeEvent, useReducer, useRef} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {
    DialogsDataType,
    MessagesDataType,
    SendMessageAC,
    StateType,
    StoreType,
    UpdateNewMessageBodyAC
} from "../../redux/State";

export type DialogsPropsType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
    newMessageBody: string
    sendMessage: () => void
    updateNewMessageBody: (body:string)=> void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const messages = props.messages.map(message => <Message message={message.message}/>)

    let textAreaRef = useRef<HTMLTextAreaElement>(null)
    let newMessageBody = props.newMessageBody

    const onClickHandler = () => {
        if (textAreaRef.current !== null) {
            props.sendMessage()
        }
    }
    const onNewMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>
                    <div>{messages}</div>
                </div>
                <div className={s.textAreaAndButton}>
                    <textarea ref={textAreaRef}
                              onChange={onNewMessageHandler}
                              placeholder={'Enter your message'}
                              value={newMessageBody}/>
                    <button onClick={onClickHandler}>add message</button>
                </div>

            </div>
        </div>

    )
}