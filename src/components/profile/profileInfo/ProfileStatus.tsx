import React from 'react';
import {ProfileInfoProps} from "./ProfileInfo";
import {UserProfileResponseType} from "../../../redux/Store";

type ProfileStatusPropsType = {
    status:string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: true
    }
    activateEditMode(){
 this.setState({
     editMode: true
 })}
    deactivateEditMode(){
 this.setState({
     editMode: false
 })}
     render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>
                        Status: {this.props.status}
                    </span>
                </div>
                }

                {this.state.editMode &&
                    <div>
                    <input
                        value={this.props.status}
                        onDoubleClick={this.deactivateEditMode.bind(this)}
                        onBlur={this.deactivateEditMode.bind(this)}
                        autoFocus={true}
                    />
                </div>
                }
            </>

        );
    }
}

