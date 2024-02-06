import React from 'react'
import {UserType} from "./State";

const initialUsersState: initialUsersStateType = {
    users: [
        {
            id:1,
           fullName: 'Kiryll',
            followed: false,
            status: 'I\'m a boss',
            location: {
                city:'Minsk',
                country:'Belarus'
            }},
        {
            id: 2,
            fullName: 'Veronica',
            followed: true,
            status: 'Hello World',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 3,
            fullName: 'Victoria',
            followed: false,
            status: 'I like cats',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id:4,
            fullName: 'Tanya',
            followed: false,
            status: 'Sotial person',
            location: {
                city:'Minsk',
                country:'Belarus'
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
        default: return state
    }
}
// actions

const followUserAC = (userId: number) => {return {type:'FOLLOW-USER',userId} as const}
const unfollowUserAC = (userId: number) => {return {type:'UNFOLLOW-USER',userId} as const}

// types

type UserActionsType = ReturnType<typeof followUserAC> | ReturnType<typeof unfollowUserAC>