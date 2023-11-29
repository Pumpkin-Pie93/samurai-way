import {AddNewPostAC, PostItemType, UpdateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


// type MyPostsPropsType = {
//     // posts: PostItemType[]
//     // dispatch: (action:any) => void
//     // newPostText: any
//     store: any
// }
//
// export const MyPostsContainer = (props: MyPostsPropsType) => {
//
//     let state = props.store.getState()
//     const addNewPost = () => {
//         props.store.dispatch(AddNewPostAC())
//         props.store.dispatch(UpdateNewPostTextAC(''))
//     }
//     const onChangeHandler = (newText: string) => {
//         props.store.dispatch(UpdateNewPostTextAC(newText))
//     }
//
//     return (
//        <MyPosts
//        updateNewPostText={onChangeHandler}
//        addPost={addNewPost}
//        posts={state.postsPage.postsData}
//        newPostText={state.postsPage.newPostText}/>
//     );
// };


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
