import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authApi} from "../../api/api";

export const Login = () => {
    
    const onSubmit = (formData:any) => {
        console.log(formData)
        authApi.login(formData)
    }
    return (
        <div>
           <h1> LOGIN </h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>

            </div>
            <div>
                <Field type={"checkbox"}  component={'input'} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)


