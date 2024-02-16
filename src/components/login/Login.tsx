import React from 'react';

export const Login = () => {
    return (
        <div>
           <h1> LOGIN </h1>
           <LoginForm/>
        </div>
    );
}

const LoginForm = () => {
    return (
            <form>
                <div>
                    <input placeholder={'login'}/>
                </div>
                <div>
                    <input placeholder={'password'}/>

                </div>
                <div>
                    <input type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

