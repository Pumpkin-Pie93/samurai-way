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
    activateEditMode = () => {
      debugger
        console.log(this)
        this.setState({
     editMode: true
 })}
    deactivateEditMode=()=>{
        debugger
 this.setState({
     editMode: false
 })}
     render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        Status: {this.props.status}
                    </span>
                </div>
                }

                {this.state.editMode &&
                    <div>
                    <input
                        value={this.props.status}
                        onDoubleClick={this.deactivateEditMode}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                    />
                </div>
                }
            </>

        );
    }
}

