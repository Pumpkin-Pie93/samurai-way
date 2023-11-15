import {DialogsPageType} from "./State";

type SendMessageAT = {
    type: 'SEND-MESSAGE'
}

type UpdateNewMessageBodyAT = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

export type AllAT = SendMessageAT | UpdateNewMessageBodyAT

export const dialogReducer = (state:DialogsPageType, action: AllAT) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: state.messagesData.length, message: body})
            return  state;
        default: return state
    }
}

export const SendMessageAC = () => {
    return {
        type:'SEND-MESSAGE'
    } as const
}
export const UpdateNewMessageBodyAC = (body: string) => {
    return {
        type:'UPDATE_NEW_MESSAGE_BODY', body
    } as const
}