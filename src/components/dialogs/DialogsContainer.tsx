import {DialogsDataType, MessagesDataType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

//types
type MapStatePropsType = {
    messages: MessagesDataType[]
        dialogs: DialogsDataType[]
        newMessageBody: string,
        isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessage: () => void,
    updateNewMessageBody: (body: string) => void
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
        sendMessage: () => {
            dispatch(SendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyAC(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)