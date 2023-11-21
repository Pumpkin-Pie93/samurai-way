import {AddNewPostAC, UpdateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


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

let mapStateToProps = (state: any) => {
    return {
        posts: state.postsPage.postsData,
        newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
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
