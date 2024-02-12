import {DialogsDataType, MessagesDataType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/Store";
import {Dialogs} from "./Dialogs";
// import {connect} from "react-redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messages: MessagesDataType[]
        dialogs: DialogsDataType[]
        newMessageBody: string
}

type MapDispatchPropsType = {
    sendMessage: () => void,
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        messages: state.dialogsPage.messagesData,
        dialogs: state.dialogsPage.dialogsData,
        newMessageBody: state.dialogsPage.newMessageBody
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