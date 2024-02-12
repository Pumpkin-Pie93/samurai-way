import React from 'react'
import {UserType} from "./Store";

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

export const followUser = (userId: number) => {
    return {type: 'FOLLOW-USER', userId} as const
}
export const unfollowUser = (userId: number) => {
    return {type: 'UNFOLLOW-USER', userId} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage:number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalCount = (totalCount:number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setToggleIsFetching = (isFetching:boolean) => {
    return {type: 'SET-FETCHING', isFetching} as const
}


// types

type UserActionsType = ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | ReturnType<typeof setToggleIsFetching>

export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalCountType = ReturnType<typeof setTotalCount>