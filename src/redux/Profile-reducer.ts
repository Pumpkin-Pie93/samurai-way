import {PostsPageType} from "./State";

type AddPostAT = {
    type: 'ADD-POST'
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AllActionsTypes = AddPostAT | UpdateNewPostTextAT

export const profileReducer = (state: PostsPageType,action: AllActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: state.postsData.length, message: state.newPostText, likes: 0}
            state.postsData.push(newPost)
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
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
