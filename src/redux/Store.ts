import {PostsPageType, profileReducer} from "./Profile-reducer";
import {dialogReducer, DialogsPageType} from "./Dialog-reducer";

// let store: StoreType = {
//     _state: {
//         postsPage: {
//             postsData: [
//                 {id: 1, message: 'Hi,it\'s my first post', likes: 33},
//                 {id: 2, message: 'How are you?', likes: 17}
//             ],
//             newPostText: '',
//             profile: {
//                 "aboutMe": null,
//                 "contacts": {
//                     "facebook": null,
//                     "website": null,
//                     "vk": null,
//                     "twitter": null,
//                     "instagram": null,
//                     "youtube": null,
//                     "github": null,
//                     "mainLink": null
//                 },
//                 "lookingForAJob": false,
//                 "lookingForAJobDescription": null,
//                 "fullName": null,
//                 "userId": null,
//                 "photos": {
//                     "small":  null,
//                     "large":  null
//                 }
//             },
//             status: ''
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: 'What\'s up?'},
//                 {id: 2, message: 'Do you go to the party tonight?'},
//                 {id: 3, message: 'I\'ve bot something special!'},
//                 {id: 4, message: 'Polinaaaa!, Go to Hooka'},
//                 {id: 5, message: 'That is quite'}
//             ],
//             dialogsData: [
//                 {
//                     id: 1,
//                     name: 'Kiryll',
//                     avatar: 'https://www.theartnewspaper.ru/media/images/32e98de8-5781-49e6-b73d-57ccea2ac8.2e16d0ba.fill-465x285.jpg'
//                 },
//                 {id: 2, name: 'Veronica', avatar: 'https://proza.ru/pics/2021/12/10/97.jpg'},
//                 {id: 3, name: 'Vika', avatar: 'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
//                 {
//                     id: 4,
//                     name: 'Tanya',
//                     avatar: 'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'
//                 },
//                 {
//                     id: 5,
//                     name: 'Alya',
//                     avatar: 'https://miro.medium.com/v2/resize:fit:1192/1*xPM9rgDuQH1w056QP7Ttgw.jpeg'
//                 }
//             ],
//             newMessageBody: '',
//         },
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Veronica', avatar: 'https://proza.ru/pics/2021/12/10/97.jpg'},
//                 {id: 2, name: 'Vika', avatar: 'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
//                 {
//                     id: 3,
//                     name: 'Tanya',
//                     avatar: 'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'
//                 }
//             ]
//         },
//         usersPage: {
//             users: []
//         },
//         auth: {
//
//         }
//     },
//         _callSubscriber() {
//             console.log('state changed')
//         },
//         getState() {
//             return this._state
//         },
//         subscribe(observer) {
//             this._callSubscriber = observer
//         },
//         addPost() {
//             let newPost = {
//                 id: this._state.postsPage.postsData.length,
//                 message: this._state.postsPage.newPostText,
//                 likes: 0
//             }
//             this._state.postsPage.postsData.push(newPost)
//             this._callSubscriber()
//         },
//         updateNewPostText(newText) {
//             this._state.postsPage.newPostText = newText
//             this._callSubscriber()
//
//         },
//         dispatch(action) {
//             this._state.postsPage = profileReducer(this._state.postsPage, action)
//             this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
//             this._callSubscriber()
//
//         }
//     }

//types



export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}

export type FriendsItemsType = {
    id: number
    name: string
    avatar: string
}
export type UsersPageType = {
    users: UserType[]
}
export type UserType = {
    name: string,
    id: number,
    photos: {
        small:string | null,
        large:string | null
    },
    followed: boolean,
    status: string,
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}
export type UserProfileType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed?: boolean
}

export type AuthDataType = {
    id: number| null ,
    email: null | string,
    login: null | string
}
