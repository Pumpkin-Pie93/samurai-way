import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/Profile-reducer";
import {UserProfileType} from "../../redux/State";

 class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.profile.userId}`)
            .then((res: any) => {
                this.props.setUserProfile(res.data.profile)
            })
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state:AppStateType): mapStateToPropsType => ({
profile: state.postsPage.profile
})
type mapStateToPropsType = {
     profile: UserProfileType
}
export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer)