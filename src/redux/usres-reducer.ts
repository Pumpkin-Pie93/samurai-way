import React from 'react'
import {UserType} from "./State";

const initialUsersState: initialUsersStateType = {
    users: [
        {
            id: 1,
            avatar:'https://www.theartnewspaper.ru/media/images/32e98de8-5781-49e6-b73d-57ccea2ac8.2e16d0ba.fill-465x285.jpg',
            fullName: 'Kiryll',
            followed: false,
            status: 'I\'m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            avatar:'https://proza.ru/pics/2021/12/10/97.jpg',
            fullName: 'Veronica',
            followed: true,
            status: 'Hello World',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            avatar:'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg',
            fullName: 'Victoria',
            followed: false,
            status: 'I like cats',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            avatar: 'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg',
            fullName: 'Tanya',
            followed: false,
            status: 'Sotial person',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
    ]
}

type initialUsersStateType = {
           users: UserType[]
}

export const userReducer = (state = initialUsersState, action: UserActionsType) => {
    switch (action.type) {
        case "FOLLOW-USER":
        {
            return {...state,
            users: state.users.map(el=> el.id === action.userId? {...el, followed: true}: el)}
        }
        case "UNFOLLOW-USER":
        {
        return {...state,
            users: state.users.map(el=> el.id === action.userId? {...el, followed: false}: el)}
        }
        case "SET-USERS":
        {
            return {...state,users: [...state.users,...action.users]}
        }
        default: return state
    }
}


// actions

export const followUserAC = (userId: number) => {return {type:'FOLLOW-USER',userId} as const}
export const unfollowUserAC = (userId: number) => {return {type:'UNFOLLOW-USER',userId} as const}
export const setUsersAC = (users:UserType[]) => {return{type: 'SET-USERS', users} as const}

// types

type UserActionsType = ReturnType<typeof followUserAC> | ReturnType<typeof unfollowUserAC> | SetUsersType
export type SetUsersType = ReturnType<typeof setUsersAC>