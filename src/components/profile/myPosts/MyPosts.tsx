import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostsPropsType) => {
	
	const posts = props.posts.map((p, index) => (<Post key={index} message={p.message} likes={p.likes}/>))
    
    
    const addNewPost = (value:any) => {
	    console.log(value)
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

const MyPostForm = (props:any) => {
	return <form onSubmit={props.handleSubmit}>
       <Field component={'textarea'} placeholder={'Enter your text here'} name={'newPost'}/>
       		<div className={s.btnWrapper}>
			<button>add post</button>
			{/*<button>remove post</button>*/}
		</div>
	</form>
}

const MyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostForm)