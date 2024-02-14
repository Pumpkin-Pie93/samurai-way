import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    const dialogs = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
                                                            avatar={dialog.avatar}/>)
    const messages = props.messages.map(message => <Message key={message.id} message={message.message}/>)

    let textAreaRef = useRef<HTMLTextAreaElement>(null)
    let newMessageBody = props.newMessageBody

    const onClickHandler = () => {
        if (textAreaRef.current !== null) {
            props.sendMessage()
        }
    }
    const onNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                              name={'messageTextArea'}
                              onChange={onNewMessageHandler}
                              placeholder={'Enter your message'}
                              value={newMessageBody}/>
                    <button onClick={onClickHandler}>add message</button>
                </div>

            </div>
        </div>

    )
}