import {UserType} from "../../redux/State";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followUserAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowUserAC} from "../../redux/usres-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

//types
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

//props
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

//class
class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res: any) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)

            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res: any) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    };
}

//component
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)