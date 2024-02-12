import {PostsPageType, UserProfileType} from "./State";

const initialState = {
    postsData: [
        {id: 1, message: 'Hi,it\'s my first post', likes: 33},
        {id: 2, message: 'How are you?', likes: 17}
    ],
    newPostText: 'it-kamasutra',
    profile: {
        name: 'Polina',
        id: 30296,
        uniqueUrlName: null,
        photos: {
            small: null ,
            large: null,
        },
        status: 'Moon Eternal Make Up!'
    }
}

export const profileReducer = (state: PostsPageType = initialState,action: AllActionsTypes): PostsPageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: state.postsData.length, message: state.newPostText, likes: 0}
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
        default: return state
    }
}


//types

export type AllActionsTypes = AddPostAT | UpdateNewPostTextAT | SetUserProfileType
type AddPostAT = ReturnType<typeof AddNewPostAC>
type UpdateNewPostTextAT = ReturnType<typeof UpdateNewPostTextAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>

//actions

export const AddNewPostAC = () => {
    return {
        type:'ADD-POST'
    } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type:'UPDATE-NEW-POST-TEXT', newText : newText
    } as const
}

export const setUserProfile = (profile:UserProfileType) => {
    return {type:'SET-USER-PROFILE',profile}as const
}
