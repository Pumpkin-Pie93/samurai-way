import {UserType} from "../../redux/State";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";

type MapStatePropsType = {
    users: UserType[]

}
type MapDispatchPropsType = {
    sendMessage: () => void,
    updateNewMessageBody: (body: string) => void
}

export type UsersPropsType = MapStatePropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,

    }
}
//
// let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
//     return {
//         sendMessage: () => {
//             dispatch(SendMessageAC())
//         },
//         updateNewMessageBody: (body: string) => {
//             dispatch(UpdateNewMessageBodyAC(body))
//         }
//     }
// }

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps)(Users)