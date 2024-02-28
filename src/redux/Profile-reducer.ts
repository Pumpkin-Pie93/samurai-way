import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

export type PostItemType = {
    id: number,
    message: string,
    likes: number
}
export type UserProfileResponseType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number | null,
    "photos": {
        "small": string | null,
        "large": string | null
    }
}
export type PostsPageType = {
    postsData: PostItemType[]
    profile: UserProfileResponseType | null
    status: string
    
}

const initialState = {
    postsData: [
        {id: 1, message: 'Hi,it\'s my first post', likes: 33},
        {id: 2, message: 'How are you?', likes: 17}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: PostsPageType = initialState,action: AllActionsTypes): PostsPageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: state.postsData.length, message: action.newPost, likes: 0}
            // state.postsData.push(newPost)
            let myStateCopy: PostsPageType = {...state, postsData: [newPost,...state.postsData]}
            return myStateCopy;
         case "SET-USER-PROFILE":{
            return {...state, profile: action.profile}
        }
        case "SET-USER-STATUS":{
            return {...state, status: action.status}
        }
        default: return state
    }
}


//types

export type AllActionsTypes = AddPostAT | SetUserProfileType | SetUserStatusType
type AddPostAT = ReturnType<typeof AddNewPostAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

//actions

export const AddNewPostAC = (newPost:string) => {
    return {
        type:'ADD-POST',
        newPost
    } as const
}
export const setUserProfile = (profile:UserProfileResponseType) => {
    return {type:'SET-USER-PROFILE',profile}as const
}

export const setUserStatus = (status: string) => {
    return {type:'SET-USER-STATUS',status}as const
}


//thunks

export const getUserProfile = (userId:number) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then((res: any) => {
            console.log(res.data)
            dispatch(setUserProfile(res.data))
        })
}

export const getUserStatus = (userId:number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then((res)=> {

                dispatch(setUserStatus(res.data))

        })
}
