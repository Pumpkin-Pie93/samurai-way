import {PostsPageType} from "./State";

type AddPostAT = {
    type: 'ADD-POST'
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AllActionsTypes = AddPostAT | UpdateNewPostTextAT

const initialState = {
    postsData: [
        {id: 1, message: 'Hi,it\'s my first post', likes: 33},
        {id: 2, message: 'How are you?', likes: 17}
    ],
    newPostText: 'it-kamasutra'
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
        default: return state
    }
}

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
