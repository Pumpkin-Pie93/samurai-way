import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {
	
	const dialogs = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
	                                                        avatar={dialog.avatar}/>)
	const messages = props.messages.map(message => <Message key={message.id} message={message.message}/>)
	
	let textAreaRef = useRef<HTMLTextAreaElement>(null)
	
	let newMessageBody = props.newMessageBody
	
	const onClickHandler = () => {
		// if (textAreaRef.current !== null) {
		// 	props.sendMessage(value)
		// }
	}
	
	const onNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let body = e.currentTarget.value
		props.updateNewMessageBody(body)
	}
    const addNewMessage = (value:any) => {
        props.sendMessage(value.newMessageBody)
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
				<AddMessageFormRedux onSubmit={addNewMessage}/>
			</div>
		</div>
	
	)
}

const AddMessageForm = (props: any) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={s.textAreaAndButton}>
            <Field component={'textarea'} placeholder={'Enter your message'} name={'newMessageBody'}/>
            <button >add message</button>
		</div>
	</form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)