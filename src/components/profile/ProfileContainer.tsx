import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/Profile-reducer";
import {UserProfileResponseType, UserProfileType} from "../../redux/Store";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

//types
type mapStateToPropsType = {
    profile: UserProfileResponseType
    myProfile: UserProfileType
}
//props
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.postsPage.profile,
    myProfile: state.postsPage.myProfile,
})
//class
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 30296
        }
       this.props.getUserProfile(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile})
    ,withRouter
    ,WithAuthRedirect)
(ProfileContainer)
