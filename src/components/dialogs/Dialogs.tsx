import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}
const DialogItem = (props:DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              <DialogItem name={'Veronica'} id={1}/>
              <DialogItem name={'Vika'} id={2}/>
              <DialogItem name={'Tanya'} id={3}/>
              <DialogItem name={'Kiryll'} id={4}/>
              <DialogItem name={'Alya'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'What are you doing? Maybe we can meet today?'}/>
            </div>
        </div>

)
}