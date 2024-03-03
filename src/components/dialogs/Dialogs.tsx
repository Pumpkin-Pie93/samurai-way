import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


export const Dialogs = (props: DialogsPropsType) => {
	
	const dialogs = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
	const messages = props.messages.map(message => <Message key={message.id} message={message.message}/>)
	let newMessageBody = props.newMessageBody
	
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

const AddMessageForm = (props: InjectedFormProps) => {
	
	const maxMessage30 = maxLengthCreator(30)
	
	return <form onSubmit={(value)=>props.handleSubmit(value)}>
		<div className={s.textAreaAndButton}>
            <Field component={FormControl} placeholder={'Enter your message'}
                   name={'newMessageBody'} tagName={'textarea'}
            validate={[requiredField,maxMessage30]}
            />
            <button >add message</button>
		</div>
	</form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)