import React from 'react'
import {UserType} from "./State";

const initialUsersState: initialUsersStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage:1,
    isFetching: false
}

type initialUsersStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export const userReducer = (state = initialUsersState, action: UserActionsType) => {
    switch (action.type) {
        case "FOLLOW-USER": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW-USER": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE":{
            return {...state,currentPage:action.currentPage}
        }
        case "SET-TOTAL-COUNT":{
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-FETCHING":{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}


// actions

export const followUserAC = (userId: number) => {
    return {type: 'FOLLOW-USER', userId} as const
}
export const unfollowUserAC = (userId: number) => {
    return {type: 'UNFOLLOW-USER', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalCountAC = (totalCount:number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setToggleIsFetchingAC = (isFetching:boolean) => {
    return {type: 'SET-FETCHING', isFetching} as const
}


// types

type UserActionsType = ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | ReturnType<typeof setToggleIsFetchingAC>

export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetTotalCountType = ReturnType<typeof setTotalCountAC>