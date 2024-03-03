import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {FormControl, Textarea} from "../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostForm: React.FC<InjectedFormProps<{ newPost: string}>> = (props: any) => {
	
	
	return <form onSubmit={props.handleSubmit}>
		<Field component={Textarea} placeholder={'Enter your text here'}
		       name={'newPost'} validate={[requiredField, maxLength10]} />
		<button type={'submit'}>Send</button>
	</form>
}

const MyPostFormRedux = reduxForm<{ newPost: string }>({form: 'ProfileAddNewPostForm'})(MyPostForm)

export const MyPosts = (props: MyPostsPropsType) => {
	
	const posts = props.posts.map((p, index) => (<Post key={index} message={p.message} likes={p.likes}/>))
	
	const addNewPost = (value: any) => {
		console.log(value)
		console.log(`add post: __ + ${value}`)
		props.addPost(value.newPost)
	}
	
	return (
		<div>
			<div className={s.myPosts}>
				<h3>My posts</h3>
				<MyPostFormRedux onSubmit={addNewPost}/>
			</div>
			<div className={s.posts}>
				{posts}
			</div>
		</div>
	
	);
};

