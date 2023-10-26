export type PostsPageType = {
    postsData: PostItemType[]
}
export type PostItemType = {
    id: number,
    message: string,
    likes: number
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}
export type DialogsPageType = {
    messagesData: MessagesDataType[]
    dialogsData: DialogsDataType[]

}
export type StateType = {
    postsPage:  PostsPageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export type SideBarType = {
    friends: FriendsItemsType[]
}
export type FriendsItemsType = {
    id: number
    name: string
    avatar:string
}



export const state = {

    postsPage: {
        postsData: [
            {id: 1, message: 'Hi,it\'s my first post', likes: 33},
            {id: 2, message: 'How are you?', likes: 17}
        ]
    },
    dialogsPage: {
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
        ]
    },
    sidebar: {
        friends : [
            {id: 1, name: 'Veronica', avatar:'https://proza.ru/pics/2021/12/10/97.jpg'},
            {id: 2, name: 'Vika',avatar:'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
            {id: 3, name: 'Tanya',avatar:'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'}
        ]
    }
}