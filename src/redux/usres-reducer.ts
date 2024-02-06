import React from 'react'

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
type UserType = {
    id:number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
type LocationType = {
    city:string,
    country:string
}

type initialUsersStateType = {
           users: UserType[]
}

export const userReducer = (state = initialUsersState, action: UserActionsType) => {
    switch (action.type) {
        case "FOLLOW-USER":
        {
            return {...state,
            users:[...state.users, state.users[userId].followed]}
        }
        case "UNFOLLOW-USER":{
            return {...state}
        }
        default: return state
    }
}
// actions

const followUserAC = () => {return {type:'FOLLOW-USER'} as const}
const unfollowUserAC = () => {return {type:'UNFOLLOW-USER'} as const}

// types

type UserActionsType = ReturnType<typeof followUserAC> | ReturnType<typeof unfollowUserAC>