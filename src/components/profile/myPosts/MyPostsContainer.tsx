import {AddNewPostAC, PostItemType, UpdateNewPostTextAC} from "../../../redux/Store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: PostItemType[]
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void,
    addPost: () => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.postsPage.postsData,
        newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(AddNewPostAC())
            dispatch(UpdateNewPostTextAC(''))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
