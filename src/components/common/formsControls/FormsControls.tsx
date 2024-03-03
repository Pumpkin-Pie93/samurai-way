import React from 'react';
import {WrappedFieldProps} from "redux-form";
import {FC} from "react";
import s from './FormsControls.module.css'

type FormControlProps = WrappedFieldProps & {
	tagName?: 'textarea' | 'input'
}

export const FormControl: FC<FormControlProps> = ({ input, meta, tagName, ...props }) => {
	const hasError = meta.touched && meta.error;

	
	return (
		<>
			<div className={`${s.formControl}`}>
				<div>
					{props.children}
				</div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</>
	);
};

export const Textarea = (props: any) =>{
	const {input, meta, ...restProps} = props
	return (
		<FormControl {...props} >
			<textarea {...input} {...restProps}/>
		</FormControl>
	)
}


