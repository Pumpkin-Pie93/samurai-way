import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/Profile-reducer";
import {UserProfileResponseType, UserProfileType} from "../../redux/Store";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

//types
type mapStateToPropsType = {
    profile: UserProfileResponseType | null
    status: string
}
//props
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status
})
//class
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 30296
        }
       this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile,getUserStatus,updateStatus})
    ,withRouter
    ,WithAuthRedirect)
(ProfileContainer)
