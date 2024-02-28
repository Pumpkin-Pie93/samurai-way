import {DialogsDataType, MessagesDataType} from "./Store";

export type DialogsPageType = {
    messagesData: MessagesDataType[]
    dialogsData: DialogsDataType[]
    newMessageBody: string
}
//
// type MessageItem = {
//     [id:number]:String[]
// }
//
// type MessagesType = {
//     messagesData:MessageItem
// }
//
// const  messages:MessagesType = {
//     messagesData: {
//         [1]:['What\'s up?','Hi'],
//         [2]:['Do you go to the party tonight?'],
//         [3]:['I\'ve bot something special!'],
//         [4]:['Polinaaaa!, Go to Hooka'],
//         [5]:[ 'That is quite'],
//
//     }
// }
// const initialState =  {
//     messagesData:  {
//         [1]:['What\'s up?','Hi'],
//         [2]:['Do you go to the party tonight?'],
//         [3]:['I\'ve bot something special!'],
//         [4]:['Polinaaaa!, Go to Hooka'],
//         [5]:[ 'That is quite'],
//     },
//     dialogsData: [
//         {id: 1, name: 'Kiryll', avatar: 'https://www.theartnewspaper.ru/media/images/32e98de8-5781-49e6-b73d-57ccea2ac8.2e16d0ba.fill-465x285.jpg'},
//         {id: 2, name: 'Veronica',avatar:'https://proza.ru/pics/2021/12/10/97.jpg'},
//         {id: 3, name: 'Vika',avatar:'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
//         {id: 4, name: 'Tanya',avatar:'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'},
//         {id: 5, name: 'Alya',avatar:'https://miro.medium.com/v2/resize:fit:1192/1*xPM9rgDuQH1w056QP7Ttgw.jpeg'}
//     ],
//     newMessageBody: '',
// }
const initialState =  {
    messagesData: [
        {id: 1, message: 'What\'s up?'},
        {id: 2, message: 'Do you go to the party tonight?'},
        {id: 3, message: 'I\'ve bot something special!'},
        {id: 4, message: 'Polinaaaa!, Go to Hooka'},
        {id: 5, message: 'That is quite'}
    ],
    dialogsData: [
        {id: 1, name: 'Kiryll', avatar: 'https://www.theartnewspaper.ru/media/images/32e98de8-5781-49e6-b73d-57ccea2ac8.2e16d0ba.fill-465x285.jpg'},
        {id: 2, name: 'Veronica',avatar:'https://proza.ru/pics/2021/12/10/97.jpg'},
        {id: 3, name: 'Vika',avatar:'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
        {id: 4, name: 'Tanya',avatar:'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'},
        {id: 5, name: 'Alya',avatar:'https://miro.medium.com/v2/resize:fit:1192/1*xPM9rgDuQH1w056QP7Ttgw.jpeg'}
    ],
    newMessageBody: '',
}

export const dialogReducer = (state:DialogsPageType = initialState, action: AllAT): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessage
            // let stateCopy: DialogsPageType = {...state, messagesData: [{id: state.messagesData.length +1, message: body},...state.messagesData]}
            let stateCopy: DialogsPageType = {
                ...state,
                messagesData: [{id: state.messagesData.length +1, message: body},...state.messagesData]}
            return  stateCopy;
        default: return state
    }
}

//actions

export const SendMessageAC = (newMessage: string) => {
    return {
        type:'SEND-MESSAGE',
        newMessage
    } as const
}

//types

type SendMessageAT = ReturnType<typeof SendMessageAC>

export type AllAT = SendMessageAT