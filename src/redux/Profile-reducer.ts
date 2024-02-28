import {PostsPageType, UserProfileResponseType, UserProfileType} from "./Store";
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

const initialState = {
    postsData: [
        {id: 1, message: 'Hi,it\'s my first post', likes: 33},
        {id: 2, message: 'How are you?', likes: 17}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ''
}

export const profileReducer = (state: PostsPageType = initialState,action: AllActionsTypes): PostsPageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: state.postsData.length, message: action.newPost, likes: 0}
            // state.postsData.push(newPost)
            let myStateCopy: PostsPageType = {...state, postsData: [newPost,...state.postsData]}
            myStateCopy.newPostText = ''
            return myStateCopy;
        case 'UPDATE-NEW-POST-TEXT':
            // state.newPostText = action.newText
            return {...state, newPostText: action.newText};
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

export type AllActionsTypes = AddPostAT | UpdateNewPostTextAT | SetUserProfileType | SetUserStatusType
type AddPostAT = ReturnType<typeof AddNewPostAC>
type UpdateNewPostTextAT = ReturnType<typeof UpdateNewPostTextAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

//actions

export const AddNewPostAC = (newPost:string) => {
    return {
        type:'ADD-POST',
        newPost
    } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type:'UPDATE-NEW-POST-TEXT', newText : newText
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
export const updateStatus = (status:string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then((res)=> {
            if(res.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
}
