import {DialogsDataType, MessagesDataType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/State";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// export const DialogsContainer = () => {
//
//     // let textAreaRef = useRef<HTMLTextAreaElement>(null)
//
//     let newMessageBody = store.getState().dialogsPage.newMessageBody
//
//     const onClickHandler = () => store.dispatch(SendMessageAC())
//     }
//     const onNewMessageHandler = (body:string) => {
//         store.dispatch(UpdateNewMessageBodyAC(body))
//     }
//
//     return (<Dialogs messages={store.getState().dialogsPage.messagesData}
//                     dialogs={store.getState().dialogsPage.dialogsData}
//                     newMessageBody={newMessageBody}
//                     sendMessage={onClickHandler}
//                     updateNewMessageBody={onNewMessageHandler}
//
//     />)
// }

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