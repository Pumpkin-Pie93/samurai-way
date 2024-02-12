import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/Profile-reducer";
import {UserProfileResponseType, UserProfileType} from "../../redux/Store";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 30296
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res: any) => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.postsPage.profile,
    myProfile: state.postsPage.myProfile
})
type mapStateToPropsType = {
    profile: UserProfileResponseType
    myProfile: UserProfileType
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)