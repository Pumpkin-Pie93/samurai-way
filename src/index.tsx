import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsDataType = {
    id: number
    message: string
    likes: number
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}

export const postsData:PostsDataType[] = [
    {id: 1, message: 'Hi,it\'s my first post', likes: 33},
    {id: 2, message: 'How are you?', likes: 17}
]
export const messagesData = [
    {id: 1, message: 'What\'s up?'},
    {id: 2, message:  'Do you go to the party tonight?'},
    {id: 3, message: 'I\'ve bot something special!'},
    {id: 4, message: 'Polinaaaa!, Go to Hooka'},
    {id: 5, message: 'That is quite'}
]
export const dialogsData = [
    {id: 1, name: 'Kiryll'},
    {id: 2, name: 'Veronica'},
    {id: 3, name: 'Vika'},
    {id: 4, name: 'Tanya'},
    {id: 5, name: 'Alya'}
]


ReactDOM.render(
        <App posts={postsData} messages={messagesData} dialogs={dialogsData}/>,
  document.getElementById('root')
);