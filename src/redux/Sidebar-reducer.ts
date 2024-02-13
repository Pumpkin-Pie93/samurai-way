
const initialState = {
    friends : [
        {id: 1, name: 'Veronica', avatar:'https://proza.ru/pics/2021/12/10/97.jpg'},
        {id: 2, name: 'Vika',avatar:'https://arthive.net/res/media/img/oy1200/work/864/378925@2x.jpg'},
        {id: 3, name: 'Tanya',avatar:'https://art-dot.ru/wp-content/uploads/2021/03/leonardo-da-vinchi-prekrasnaya-ferronera.jpg'}
    ]
}

type ActionType = {
    type: 'XXX'
}
export const sidebarReducer = (state:any = initialState, action: ActionType) => {
    switch (action.type){
        case 'XXX':
            return {...state}
        default: return state
    }

}
