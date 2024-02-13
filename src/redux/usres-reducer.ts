import React from 'react'
import {UserType} from "./Store";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

const initialUsersState: initialUsersStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

type initialUsersStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
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
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}


// actions
export const followSuccess = (userId: number) => {
    return {type: 'FOLLOW-USER', userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: 'UNFOLLOW-USER', userId} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {type: 'SET-FETCHING', isFetching} as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {type: 'TOGGLE-FOLLOWING-PROGRESS', isFetching, userId} as const
}

//thunk
export const getUsers = (currentPage: number,pageSize:number) => (dispatch:Dispatch) => {
    dispatch(setToggleIsFetching(true))
    usersApi.getUsers(currentPage,pageSize)
        .then((res: any) => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(res.items))
            dispatch(setTotalCount(res.totalCount))
        })
}
export const follow = (userId:number) => (dispatch:Dispatch) => {
    dispatch(toggleFollowingInProgress(true,userId))
    usersApi.follow(userId)
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false,userId))
        })
}
export const unfollow = (userId:number) => (dispatch:Dispatch) => {
    dispatch(toggleFollowingInProgress(true,userId))
    usersApi.unfollow(userId)
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false,userId))
        })
}

// types
type UserActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalCountType = ReturnType<typeof setTotalCount>