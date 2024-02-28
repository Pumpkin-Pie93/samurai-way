import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {AddNewPostAC, PostItemType} from "../../../redux/Profile-reducer";

type MapStatePropsType = {
    posts: PostItemType[]
    // newPostText: string
}

type MapDispatchPropsType = {
    addPost: (newPost:string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.postsPage.postsData,
        // newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: (newPost:string) => {
            dispatch(AddNewPostAC(newPost))
           
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
