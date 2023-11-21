import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/State";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

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

let mapStateToProps = (state: any) => {
    return {
        messages: state.dialogsPage.messagesData,
        dialogs: state.dialogsPage.dialogsData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: any) => {
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