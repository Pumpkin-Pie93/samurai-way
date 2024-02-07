import React from 'react'
import {UserType} from "./State";

const initialUsersState: initialUsersStateType = {
    users: []
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