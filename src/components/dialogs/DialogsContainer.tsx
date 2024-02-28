import {DialogsDataType, MessagesDataType} from "../../redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import React from "react";
import {SendMessageAC} from "../../redux/Dialog-reducer";

//types
type MapStatePropsType = {
    messages: MessagesDataType[]
        dialogs: DialogsDataType[]
        newMessageBody: string,
        isAuth: boolean
}
type MapDispatchPropsType = {
    sendMessage: (value:string) => void,
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

//props
let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        messages: state.dialogsPage.messagesData,
        dialogs: state.dialogsPage.dialogsData,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        sendMessage: (value: string) => {
            dispatch(SendMessageAC(value))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
