import {UserType} from "../../redux/State";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followUserAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowUserAC} from "../../redux/usres-reducer";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number


}
type MapDispatchPropsType = {
    follow: (userId:number) => void,
    unfollow: (userId:number) => void,
    setUsers: (users:UserType[]) => void,
    setCurrentPage: (currentPage:number) => void,
    setTotalCount: (totalCount: number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId) => {
            console.log('follow' + userId)
            dispatch(followUserAC(userId))
        },
        unfollow:(userId) => {
            console.log('unfollow' + userId)
            dispatch(unfollowUserAC(userId))
        },
        setUsers:(users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount)=> {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)