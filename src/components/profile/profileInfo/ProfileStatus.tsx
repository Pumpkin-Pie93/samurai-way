import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status:string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: true,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
     editMode: true
 })}
    deactivateEditMode=()=>{
        this.setState({
     editMode: false
        })
        this.props.updateStatus(this.state.status)
 }
    statusChange = (e:ChangeEvent<HTMLInputElement>) => {
        let newStatus = e.currentTarget.value
        this.setState({...this.state,status: newStatus})
}

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
                        onChange={this.statusChange}
                        value={this.state.status}
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

