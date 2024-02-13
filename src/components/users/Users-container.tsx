import {UserType} from "../../redux/Store";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setToggleIsFetching,
    setTotalCount,
    setUsers,
    unfollowUser
} from "../../redux/usres-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersApi} from "../../api/api";


//types
type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

//props
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//class
class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage,this.props.pageSize)
            .then((res: any) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        usersApi.getUsers(pageNumber,this.props.pageSize)
            .then((res: any) => {
                this.props.setUsers(res.items)
                this.props.setToggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollowUser}
                    follow={this.props.followUser}
                />
            }
        </>
    };
}

//component
export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setToggleIsFetching,

})(UsersContainer)